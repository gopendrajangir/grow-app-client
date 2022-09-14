import React from "react"

export default (glider: React.MutableRefObject<HTMLDivElement | null>, previousTab: React.MutableRefObject<HTMLButtonElement | null>, currentTab: React.RefObject<HTMLButtonElement>) => {
  if (glider.current && previousTab.current && currentTab.current) {
    glider.current.animate([
      {
        left: previousTab.current.offsetLeft - currentTab.current.offsetLeft + "px",
        width: previousTab.current.offsetWidth + 'px',
      }, {
        left: '0px',
        width: '100%'
      },
    ], {
      duration: 200
    });
  }
}