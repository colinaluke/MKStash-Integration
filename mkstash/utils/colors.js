export const THEMES = {
    'velvet': () => {
        localStorage.setItem('theme', 'velvet')
        document.documentElement.style.setProperty('--theme-gray', 'var(--admin-dark-1-theme-1)')
        document.documentElement.style.setProperty('--theme-bg', 'var(--admin-dark-2-theme-1)')
        document.documentElement.style.setProperty('--theme-light', 'var(--admin-light-theme-1)')
        document.documentElement.style.setProperty('--theme-primary', 'var(--admin-primary-theme-1)')
        document.documentElement.style.setProperty('--theme-accent', 'var(--admin-accent-theme-1)')
        document.documentElement.style.setProperty('--theme-line-1', ' var(--admin-line-color-1-theme-1)')
        document.documentElement.style.setProperty('--theme-line-1-accent', 'var(--admin-line-color-1-accent-theme-1)')
        document.documentElement.style.setProperty('--theme-line-2', 'var(--admin-line-color-2-theme-1)')
        document.documentElement.style.setProperty('--theme-line-2-accent', 'var(--admin-line-color-2-accent-theme-1)')
    },
    'royal': () => {
        localStorage.setItem('theme', 'royal')
        document.documentElement.style.setProperty('--theme-gray', 'var(--admin-dark-1-theme-2)')
        document.documentElement.style.setProperty('--theme-bg', 'var(--admin-dark-2-theme-2)')
        document.documentElement.style.setProperty('--theme-light', 'var(--admin-light-theme-2)')
        document.documentElement.style.setProperty('--theme-primary', 'var(--admin-primary-theme-2)')
        document.documentElement.style.setProperty('--theme-accent', 'var(--admin-accent-theme-2)')
        document.documentElement.style.setProperty('--theme-line-1', ' var(--admin-line-color-1-theme-2)')
        document.documentElement.style.setProperty('--theme-line-1-accent', 'var(--admin-line-color-1-accent-theme-2)')
        document.documentElement.style.setProperty('--theme-line-2', 'var(--admin-line-color-2-theme-2)')
        document.documentElement.style.setProperty('--theme-line-2-accent', 'var(--admin-line-color-2-accent-theme-2)')
    },
    'verdant': () => {
        localStorage.setItem('theme', 'verdant')
        document.documentElement.style.setProperty('--theme-gray', 'var(--admin-dark-1-theme-3)')
        document.documentElement.style.setProperty('--theme-bg', 'var(--admin-dark-2-theme-3)')
        document.documentElement.style.setProperty('--theme-light', 'var(--admin-light-theme-3)')
        document.documentElement.style.setProperty('--theme-primary', 'var(--admin-primary-theme-3)')
        document.documentElement.style.setProperty('--theme-accent', 'var(--admin-accent-theme-3)')
        document.documentElement.style.setProperty('--theme-line-1', ' var(--admin-line-color-1-theme-3)')
        document.documentElement.style.setProperty('--theme-line-1-accent', 'var(--admin-line-color-1-accent-theme-3)')
        document.documentElement.style.setProperty('--theme-line-2', 'var(--admin-line-color-2-theme-3)')
        document.documentElement.style.setProperty('--theme-line-2-accent', 'var(--admin-line-color-2-accent-theme-3)')
    },
    'earth': () => {
        localStorage.setItem('theme', 'earth')
        document.documentElement.style.setProperty('--theme-gray', 'var(--admin-dark-1-theme-4)')
        document.documentElement.style.setProperty('--theme-bg', 'var(--admin-dark-2-theme-4)')
        document.documentElement.style.setProperty('--theme-light', 'var(--admin-light-theme-4)')
        document.documentElement.style.setProperty('--theme-primary', 'var(--admin-primary-theme-4)')
        document.documentElement.style.setProperty('--theme-accent', 'var(--admin-accent-theme-4)')
        document.documentElement.style.setProperty('--theme-line-1', ' var(--admin-line-color-1-theme-4)')
        document.documentElement.style.setProperty('--theme-line-1-accent', 'var(--admin-line-color-1-accent-theme-4)')
        document.documentElement.style.setProperty('--theme-line-2', 'var(--admin-line-color-2-theme-4)')
        document.documentElement.style.setProperty('--theme-line-2-accent', 'var(--admin-line-color-2-accent-theme-4)')
    },
}

export const DOUGHNUT_COLORS = {
    'velvet': () => {
        const velvet = [
            '#d03d47',
            '#d63384',
            '#6f42c1',
            '#6610f2'
        ]
        return velvet
    },
    'royal': () => {
        const royal = [
            '#5B8FF9',
            '#38cbe1',
            '#6a8f97',
            '#6a8f97'
        ]
        return royal
    },
    'verdant': () => {
        const verdant = [
            '#A0D995',
            '#6CC4A1',
            '#4CACBC',
            '#F6E3C5'
        ]
        return verdant
    },
    'earth': () => {
        const earth = [
            '#9E7676',
            '#594545',
            '#CEAB93',
            '#E3CAA5'
        ]
        return earth
    }
}

export const LINE_COLORS = {
    'velvet': () => {
        return {
            color1: '#d03d47',
            color2: '#212121',
            color3: '#ffc107',
            color4: '#6a8f97'
        }
    },
    'royal': () => {
        return {
            color1: '#5B8FF9',
            color2: '#38cbe1',
            color3: '#5AD8A6',
            color4: '#6a8f97'
        }
    },
    'earth': () => {
        return {
            color1: '#9E7676',
            color2: '#594545',
            color3: '#CEAB93',
            color4: '#E3CAA5'
        }
    },
    'verdant': () => {
        return {
            color1: '#F6E3C5',
            color2: '#A0D995',
            color3: '#6CC4A1',
            color4: '#4CACBC'
        }
    }
}