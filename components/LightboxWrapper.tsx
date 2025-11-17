import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface LightboxWrapperProps {
  open: boolean
  close: () => void
  index: number
  slides: { src: string }[]
}

export default function LightboxWrapper({ open, close, index, slides }: LightboxWrapperProps) {
  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' }
      }}
    />
  )
}
