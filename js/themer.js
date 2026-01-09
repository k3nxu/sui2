const setValue = (property, value) => {
  if (value) {
    document.documentElement.style.setProperty(`--${property}`, value);

    const input = document.querySelector(`#${property}`);
    if (input) {
      value = value.replace("px", "");
      input.value = value;
    }
  }
};

const setValueFromLocalStorage = (property) => {
  let value = localStorage.getItem(property);
  setValue(property, value);
};

const THEMES = {
  "blackboard": {
    "color-background": "#1a1a1a",
    "color-text-pri": "#FFFDEA",
    "color-text-acc": "#5c5c5c",
  },
  "gazette": {
    "color-background": "#F2F7FF",
    "color-text-pri": "#000000",
    "color-text-acc": "#5c5c5c",
  },
  "espresso": {
    "color-background": "#21211F",
    "color-text-pri": "#D1B59A",
    "color-text-acc": "#4E4E4E",
  },
  "cab": {
    "color-background": "#F6D305",
    "color-text-pri": "#1F1F1F",
    "color-text-acc": "#424242",
  },
  "cloud": {
    "color-background": "#f1f2f0",
    "color-text-pri": "#35342f",
    "color-text-acc": "#37bbe4",
  },
  "lime": {
    "color-background": "#263238",
    "color-text-pri": "#AABBC3",
    "color-text-acc": "#aeea00",
  },
  "white": {
    "color-background": "#ffffff",
    "color-text-pri": "#222222",
    "color-text-acc": "#dddddd",
  },
  "tron": {
    "color-background": "#242B33",
    "color-text-pri": "#EFFBFF",
    "color-text-acc": "#6EE2FF",
  },
  "blues": {
    "color-background": "#2B2C56",
    "color-text-pri": "#EFF1FC",
    "color-text-acc": "#6677EB",
  },
  "passion": {
    "color-background": "#f5f5f5",
    "color-text-pri": "#12005e",
    "color-text-acc": "#8e24aa",
  },
  "chalk": {
    "color-background": "#263238",
    "color-text-pri": "#AABBC3",
    "color-text-acc": "#FF869A",
  },
  "paper": {
    "color-background": "#F8F6F1",
    "color-text-pri": "#4C432E",
    "color-text-acc": "#AA9A73",
  },
  "initial": {
    "color-background": "initial",
    "color-text-pri": "initial",
    "color-text-acc": "initial",
  }
};

const setTheme = (themeName) => {
  const options = THEMES[themeName];
  if (!options) return;

  for (let option of Object.keys(options)) {
    const property = option;
    const value = options[option];

    setValue(property, value);
    localStorage.setItem(property, value);
  }
  // Store the theme name itself for reference
  localStorage.setItem("current-theme", themeName);
};

export function loadTheme() {
  // 1. Check if user has explicitly set a theme previously (by checking one of the properties)
  const savedBg = localStorage.getItem("color-background");
  
  if (savedBg) {
    // Restore from localStorage
    setValueFromLocalStorage("color-background");
    setValueFromLocalStorage("color-text-pri");
    setValueFromLocalStorage("color-text-acc");
  } else {
    // 2. Check for default theme in injected config
    const defaultTheme = window.SUI_CONFIG && window.SUI_CONFIG.theme;
    if (defaultTheme && THEMES[defaultTheme]) {
      setTheme(defaultTheme);
    }
  }
}

export function bindThemeButtons() {
  const dataThemeButtons = document.querySelectorAll("[data-theme]");

  for (let i = 0; i < dataThemeButtons.length; i++) {
    dataThemeButtons[i].addEventListener("click", () => {
      const theme = dataThemeButtons[i].dataset.theme;
      setTheme(theme);
    });
  }
}
