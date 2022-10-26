import { Component } from "./base-component";
import * as Validation from "../util/validation";
import { autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";

//Project input class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		super("project-input", "app", true, "user-input");

		this.titleInputElement = this.element.querySelector(
			"#title"
		) as HTMLInputElement;
		this.descriptionInputElement = this.element.querySelector(
			"#description"
		) as HTMLInputElement;
		this.peopleInputElement = this.element.querySelector(
			"#people"
		) as HTMLInputElement;

		this.configure();
	}

	renderContent() {}

	private gatherUserInput(): [string, string, number] | void {
		const enteredTitle = this.titleInputElement.value;
		const enteredDescription = this.descriptionInputElement.value;
		const enteredPeople = this.peopleInputElement.value;

		const titleValidatable: Validation.Validatable = {
			value: enteredTitle,
			required: true,
			minLength: 3,
			maxLength: 12,
		};

		const descrtiptionValidatable: Validation.Validatable = {
			value: enteredDescription,
			required: true,
			minLength: 3,
			maxLength: 20,
		};

		const peopleValidatable: Validation.Validatable = {
			value: enteredPeople,
			required: true,
			minLength: 1,
			maxLength: 11,
		};

		if (
			!Validation.validate(titleValidatable) ||
			!Validation.validate(descrtiptionValidatable) ||
			!Validation.validate(peopleValidatable)
		) {
			alert("Invalid input, please try again");
			return;
		} else {
			return [enteredTitle, enteredDescription, +enteredPeople];
		}
	}

	private clearInputs() {
		this.titleInputElement.value = "";
		this.descriptionInputElement.value = "";
		this.peopleInputElement.value = "";
	}

	@autobind
	private submitHandler(event: Event) {
		event.preventDefault();
		const userInput = this.gatherUserInput();

		if (Array.isArray(userInput)) {
			const [title, desc, people] = userInput;
			projectState.addProject(title, desc, people);
			this.clearInputs();
		}
	}

	configure() {
		this.element.addEventListener("submit", this.submitHandler);
	}
}
