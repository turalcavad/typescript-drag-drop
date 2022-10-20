//validation
interface Validatable {
	value: string | number;
	minLength?: number;
	maxLength?: number;
	required?: boolean;
	min?: number;
	max?: number;
}

function validate(validatableInput: Validatable) {
	let isValid = true;
	if (validatableInput.required) {
		isValid = isValid && validatableInput.value.toString().trim().length !== 0;
	}
	if (
		validatableInput.minLength != null &&
		typeof validatableInput.minLength === "string"
	) {
		isValid = isValid && validatableInput.value > validatableInput.minLength;
	}
	if (
		validatableInput.maxLength != null &&
		typeof validatableInput.maxLength === "string"
	) {
		isValid = isValid && validatableInput.value < validatableInput.maxLength;
	}

	if (
		validatableInput.min != null &&
		typeof validatableInput.min === "number"
	) {
		isValid = isValid && validatableInput.value > validatableInput.min;
	}
	if (
		validatableInput.max != null &&
		typeof validatableInput.max === "number"
	) {
		isValid = isValid && validatableInput.value < validatableInput.max;
	}
	return isValid;
}

//autobind decarator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const boudnFn = originalMethod.bind(this);
			return boudnFn;
		},
	};
	return adjDescriptor;
}

//Project input class
class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		this.templateElement = document.getElementById(
			"project-input"
		)! as HTMLTemplateElement;
		this.hostElement = document.getElementById("app")! as HTMLDivElement;

		const importedNode = document.importNode(
			this.templateElement.content,
			true
		);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		console.log(this.element);
		this.element.id = "user-input";

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
		this.attach();
	}

	private gatherUserInput(): [string, string, number] | void {
		const enteredTitle = this.titleInputElement.value;
		const enteredDescription = this.descriptionInputElement.value;
		const enteredPeople = this.peopleInputElement.value;

		const titleValidatable: Validatable = {
			value: enteredTitle,
			required: true,
			minLength: 3,
			maxLength: 7,
		};

		const descrtiptionValidatable: Validatable = {
			value: enteredTitle,
			required: true,
			minLength: 3,
			maxLength: 7,
		};

		const peopleValidatable: Validatable = {
			value: enteredTitle,
			required: true,
			minLength: 3,
			maxLength: 7,
		};

		if (
			validate(titleValidatable) &&
			validate(descrtiptionValidatable) &&
			validate(peopleValidatable)
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
		console.log(this);
		const userInput = this.gatherUserInput();

		if (Array.isArray(userInput)) {
			const [title, desc, people] = userInput;
			this.clearInputs();
		}
	}

	private configure() {
		this.element.addEventListener("submit", this.submitHandler);
	}

	private attach() {
		this.hostElement.insertAdjacentElement("afterbegin", this.element);
	}
}

const prjInput = new ProjectInput();
