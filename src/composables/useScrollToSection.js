export function useScrollToSection() {
  const scrollToSection = (sectionId) => {
    if (!sectionId) {
      return
    }

    if (typeof document === 'undefined') {
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return { scrollToSection }
}
