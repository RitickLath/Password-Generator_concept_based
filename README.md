# Password Generator Project

This project is a simple password generator built with React. It demonstrates the use of the `useRef`, `useCallback`, and `useEffect` hooks to create a password generator with dynamic length and character options.

## Features

- Generate passwords of variable length.
- Include numbers and special characters in passwords.
- Copy generated passwords to the clipboard.

## How It Works

### `useRef`

The `useRef` hook is used to create a reference to the input element where the generated password is displayed. This reference is used to select and copy the password to the clipboard.

```javascript
const selectText = useRef(null);
// ...
<input
  type="text"
  value={passwordCreated}
  ref={selectText}
  readOnly
/>
```

### `useCallback`

The `useCallback` hook is used to memoize the `passGen` function, which generates passwords based on the selected options (length, number containment, and character containment). It ensures that the function is only recreated when its dependencies change.

```javascript
const passGen = useCallback(() => {
  // ...
}, [length, numberContain, charContain]);
```

### `useEffect`

The `useEffect` hook is employed to call the `passGen` function when the component mounts or when any of its dependencies (length, numberContain, or charContain) change. This ensures that the password is updated whenever the user changes the generator settings.

```javascript
useEffect(() => {
  passGen();
}, [passGen, length, charContain, numberContain]);
```

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following commands:

   ```bash
   npm install # Install project dependencies
   npm start   # Start the development server
   ```

4. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to use the password generator.

## Contributing

If you'd like to contribute to this project, please feel free to open issues or pull requests on the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy Learning!!
