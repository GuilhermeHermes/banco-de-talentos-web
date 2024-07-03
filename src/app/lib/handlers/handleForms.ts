// handleForms.ts

export const handleFocus = (event: Event) => {
    const target = event.target as HTMLElement;
    target.classList.add("input-selected");
  };
  
  export const handleBlur = (event: Event) => {
    const target = event.target as HTMLElement;
    target.classList.remove("input-selected");
  };
  
  export const handleMouseEnter = (event: Event) => {
    const target = event.target as HTMLElement;
    target.classList.add("mouse-on-input");
  };
  
  export const handleMouseLeave = (event: Event) => {
    const target = event.target as HTMLElement;
    target.classList.remove("mouse-on-input");
  };
  