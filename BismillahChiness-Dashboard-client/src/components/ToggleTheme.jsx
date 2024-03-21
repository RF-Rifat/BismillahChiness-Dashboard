import { Switch } from "@material-tailwind/react";
import { useEffect, useState } from "react";


const ToggleTheme = () => {
  // Retrieve the theme from local storage on initial load
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    // Update the HTML class and save the theme to local storage
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    // Toggle between "light" and "dark" themes
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <div>
        {/* <Switch
        id="custom-switch-component"
        checked={theme === "dark"}
        onChange={handleThemeChange}
      /> */}
        <Switch
          id="custom-switch-component"
          color="indigo"
          className="h-full w-full"
          containerProps={{
            className: "w-11 h-6",
          }}
          circleProps={{
            className: "before:hidden left-0.5 border-none",
          }}
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
      </div>

    </>
  );
};

export default ToggleTheme;
