import { Button, TextField, Typography } from "@material-ui/core";
import { Compat } from "./compat";
import { Logo } from "./logo";

export function App() {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
      <Compat />
      <Typography>Hello from material ui</Typography>
      <Button variant="contained">Test Button</Button>
      <TextField label="Testlabel" variant="outlined" size="small" />
    </>
  );
}
