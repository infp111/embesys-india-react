import { Icon } from './Icons';
export default function WhatsAppButton() {
  return (
    <a className="wa" href="https://wa.me/917381069100" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <span className="wa__label">Need assistance? I'm here to help.</span>
      <span className="wa__btn"><Icon name="whatsapp" size={30} /></span>
    </a>
  );
}
