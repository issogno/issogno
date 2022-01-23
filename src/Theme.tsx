import { ThemeType } from "grommet";

export const IssognoPalette = {
    palePink: '#C7BDBC',
    darkBrown: '#773304',
    pureBlack: '#000000',
    creamYellow: '#b3ad49'
}

export const hexToRgba = function (hex: string, alpha?: number) {
  const hexStr = hex[0] === '#' ? hex.substring(1) : hex;
  let val = parseInt(hexStr, 16);

  if (val != null && !isNaN(val)) {
    let a = (val & 0xFF000000) >>> 24;
    let r = (val & 0xFF0000) >>> 16;
    let g = (val & 0xFF00) >>> 8;
    let b = val & 0xFF;
    if (a && !alpha) {
      alpha = a / 255;
    }

    const rgb = `${r},${g},${b}`;
    return alpha ? `rgba(${rgb},${alpha})` : `rgb(${rgb})`;
  }

  return hex;
};
  
export const theme: ThemeType = {
  "global": {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    "colors": {
      issognoHeader: IssognoPalette.pureBlack,
      icon: "#f8f8f8",
      "active": "rgba(221,221,221,0.5)",
      "black": "#000000",
      "border": "rgba(255,255,255,0.33)",
      "brand": IssognoPalette.creamYellow,
      "control": "accent-1",
      "focus": "accent-1",
      "placeholder": "#AAAAAA",
      "selected": "brand",
      "text": "icon",
      "white": "#FFFFFF",

      "accent-1": hexToRgba(IssognoPalette.creamYellow, 0.8),
      "accent-2": hexToRgba(IssognoPalette.creamYellow, 0.6),
      "accent-3": hexToRgba(IssognoPalette.creamYellow, 0.4),
      "accent-4": hexToRgba(IssognoPalette.creamYellow, 0.2),
      "dark-1": "#333333",
      "dark-2": "#555555",
      "dark-3": "#777777",
      "dark-4": "#999999",
      "dark-5": "#999999",
      "dark-6": "#999999",
      "light-1": "#F8F8F8",
      "light-2": "#F2F2F2",
      "light-3": "#EDEDED",
      "light-4": "#DADADA",
      "light-5": "#DADADA",
      "light-6": "#DADADA",
      "neutral-1": hexToRgba(IssognoPalette.darkBrown, 0.8),
      "neutral-2": hexToRgba(IssognoPalette.darkBrown, 0.6),
      "neutral-3": hexToRgba(IssognoPalette.darkBrown, 0.4),
      "neutral-4": hexToRgba(IssognoPalette.darkBrown, 0.2),
      "status-critical": "#FF4040",
      "status-error": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC"
    },
    "deviceBreakpoints": {
      "phone": "small",
      "tablet": "medium",
      "computer": "large"
    },
    "control": {
      "border": {
        "width": "1px",
        "radius": "4px",
        "color": "border"
      }
    },
    "drop": {
      "background": "#ffffff",
    },
    "focus": {
      "border": {
        "color": "focus"
      }
    },
    "hover": {
      "background": {
        color: "active",
        opacity: "medium"
      },
      "color": {
        "dark": "white",
        "light": "black"
      }
    },
    "opacity": {
      "strong": 0.8,
      "medium": 0.4,
      "weak": 0.1
    },
    "selected": {
      "background": "selected",
      "color": "white"
    },
  },
  "anchor": {
    hover: {
      textDecoration: "none"
    },
    "color": IssognoPalette.creamYellow
  },
  "button": {
    "disabled": {
      "opacity": 0.3
    }
  },
  "checkBox": {
    "border": {
      "color": {
        "dark": "rgba(255, 255, 255, 0.5)",
        "light": "rgba(0, 0, 0, 0.15)"
      }
    },
    "hover": {
      "border": {
        "color": {
          "dark": "white",
          "light": "black"
        }
      }
    },
    "toggle": {
      "color": {
        "dark": "#d9d9d9",
        "light": "#d9d9d9"
      }
    }
  },
  "diagram": {
    "line": {
      "color": "accent-1"
    }
  },
  "formField": {
    "border": {
      "color": "border",
      "error": {
        "color": {
          "dark": "white",
          "light": "status-critical"
        }
      }
    },
    "error": {
      "color": {
        "dark": "status-critical",
        "light": "status-critical"
      }
    },
    "help": {
      "color": {
        "dark": "dark-3",
        "light": "dark-3"
      }
    }
  },
  "heading": {
    "responsiveBreakpoint": "small",
    "weight": 600
  },
  "layer": {
    "background": "white",
    "overlay": {
      "background": "rgba(0, 0, 0, 0.5)"
    },
    "responsiveBreakpoint": "small",
    "zIndex": "10"
  },
  "meter": {
    "color": "accent-1"
  },
  "radioButton": {
    "border": {
      "color": {
        "dark": "rgba(255, 255, 255, 0.5)",
        "light": "rgba(0, 0, 0, 0.15)"
      },
    },
    "hover": {
      "border": {
        "color": {
          "dark": "white",
          "light": "black"
        }
      }
    }
  },
  "rangeSelector": {
    "background": {
      "invert": {
        "color": "light-4"
      }
    }
  },
  "tab": {
    "active": {
      "color": "text"
    },
    "border": {
      "side": "bottom",
      "size": "small",
      "color": {
        "dark": "accent-1",
        "light": "brand"
      },
      "active": {
        "color": {
          "dark": "white",
          "light": "black"
        }
      },
      "hover": {
        "color": {
          "dark": "white",
          "light": "black"
        }
      }
    },
    "color": "control",
    "hover": {
      "color": {
        "dark": "white",
        "light": "black"
      }
    },
  },
  "video": {
    "captions": {
      "background": "rgba(0, 0, 0, 0.7)"
    },
    "icons": {},
    "scrubber": {
      "color": "light-4"
    }
  },
  "worldMap": {
    "color": "light-3",
    "hover": {
      "color": "light-4"
    },
  }
}

/* export const theme: ThemeType = {
    global: {
      colors: {
        brand: IssognoPalette.creamYellow,      

        palePink: IssognoPalette.palePink,
        darkBrown: IssognoPalette.darkBrown,
        pureBlack: IssognoPalette.pureBlack,
        creamYellow: IssognoPalette.creamYellow,

        issognoText: IssognoPalette.creamYellow,
        issognoHeader: IssognoPalette.pureBlack
      },
  
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };
 */  

  