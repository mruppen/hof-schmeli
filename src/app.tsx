import React from "react";
import { Button, TextField, Typography, useMediaQuery, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Compat } from "./compat";
import { Logo } from "./logo";
import useCustomTheme from "./customTheme";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    green: Palette['primary'];
    orange: Palette['primary'];
    blue: Palette['primary'];
    yellow: Palette['primary'];
  }
  interface PaletteOptions {
    green: PaletteOptions['primary'];
    orange: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    yellow: PaletteOptions['primary'];
  }
}

export function App() {
  const theme = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
