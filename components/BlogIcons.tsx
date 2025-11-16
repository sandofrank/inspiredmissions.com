// SVG icon components for use in blog posts
// Usage in MDX: <IconHeart />, <IconPrayer position="left" />, etc.

interface IconProps {
  position?: 'left' | 'right' | 'center'
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'accent'
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16'
}

const colorClasses = {
  primary: 'icon-primary',
  secondary: 'icon-secondary',
  accent: 'icon-accent'
}

const positionClasses = {
  left: 'float-left mr-4 mb-2',
  right: 'float-right ml-4 mb-2',
  center: 'mx-auto block'
}

// Heart icon - for love, compassion, ministry
export function IconHeart({ position = 'right', size = 'md', color = 'accent' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

// Prayer/Hands icon - for prayer, worship, faith
export function IconPrayer({ position = 'left', size = 'md', color = 'primary' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

// People/Community icon - for community, fellowship, church
export function IconCommunity({ position = 'right', size = 'md', color = 'secondary' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

// Bible/Book icon - for teaching, Bible study, education
export function IconBible({ position = 'left', size = 'md', color = 'primary' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

// Globe/World icon - for missions, global reach
export function IconGlobe({ position = 'right', size = 'md', color = 'primary' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

// Star/Light icon - for hope, new beginnings, transformation
export function IconStar({ position = 'left', size = 'md', color = 'secondary' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}

// Home/House icon - for children's home, shelter, family
export function IconHome({ position = 'right', size = 'md', color = 'accent' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

// Gift/Present icon - for giving, generosity, support
export function IconGift({ position = 'left', size = 'md', color = 'secondary' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  )
}

// Hands Helping icon - for service, ministry, outreach
export function IconHelping({ position = 'right', size = 'md', color = 'primary' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

// Lightbulb icon - for wisdom, learning, insight
export function IconLight({ position = 'left', size = 'md', color = 'secondary' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

// Tree/Growth icon - for growth, planting churches, fruit
export function IconTree({ position = 'right', size = 'md', color = 'accent' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
    </svg>
  )
}

// Sun/Sunrise icon - for new day, hope, resurrection
export function IconSun({ position = 'left', size = 'md', color = 'secondary' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

// Education/School icon - for training, education programs
export function IconEducation({ position = 'right', size = 'md', color = 'primary' }: IconProps) {
  return (
    <svg className={`${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} opacity-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  )
}
