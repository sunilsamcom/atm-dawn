import { ButtonStylesParams } from "@mantine/core";

export const MANTINE_THEME = {
  fontFamily: "Avenir",
  components: {
    Button: {
      // Sample only
      styles: (theme, params: ButtonStylesParams) => ({
        root: {
          height: 42,
          padding: "0 30px",
          backgroundColor:
            params.variant === "filled"
              ? theme.colors[params.color || theme.primaryColor][9]
              : undefined,
        },
      }),
    },
  },
};
