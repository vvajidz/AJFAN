import { Instagram, Facebook } from "lucide-react";

const Contactlc = () => {
  const socialLinks = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://www.instagram.com/pizzaeyelid?igsh=azB6MDdzN3hjeDdq",
      color: "hover:text-pink-500"
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://www.facebook.com/share/16uNrZXqwy/",
      color: "hover:text-blue-500"
    },
    { 
      name: "Snapchat", 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12.206.793c-.432 0-3.906.086-5.277 3.072-.432.864-.648 1.944-.648 3.456 0 .216-.216.432-.432.432-1.296.216-3.888.864-4.104 1.296-.108.216-.216.432.108.648.54.324 1.08.54 1.62.648.108 0 .324.108.324.324 0 .432-.756 2.916-2.376 3.456-.216.108-.324.216-.216.54.108.216.432.432.864.54.432.108 1.08.324 1.404.864.108.216.324.432.648.432 1.188 0 2.376.54 3.456 1.62.756.756 1.404 1.728 1.944 2.916 0 .108.108.216.324.216.108 0 .216-.108.216-.216.54-1.188 1.188-2.16 1.944-2.916 1.08-1.08 2.268-1.62 3.456-1.62.324 0 .54-.216.648-.432.324-.54.972-.756 1.404-.864.432-.108.756-.324.864-.54.108-.324 0-.432-.216-.54-1.62-.54-2.376-3.024-2.376-3.456 0-.216.108-.324.324-.324.54-.108 1.08-.324 1.62-.648.324-.216.216-.432.108-.648-.216-.432-2.808-1.08-4.104-1.296-.216 0-.432-.216-.432-.432 0-1.512-.216-2.592-.648-3.456C16.112.879 12.638.793 12.206.793z"/>
        </svg>
      ),
      color: "hover:text-yellow-400"
    },
    { 
      name: "TikTok", 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: "hover:text-black"
    },
  ];

  return (
    <div className="py-6 bg-muted/20">
      <div className="flex justify-center gap-6">
        {socialLinks.map((social, i) => {
          const Icon = social.icon;
          return (
            <a 
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${social.color}`}
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contactlc;
