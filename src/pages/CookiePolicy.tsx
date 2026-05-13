import React, { useState } from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import type { Language } from '../i18n';
import { detectLanguage } from '../i18n';

const h2 = 'text-2xl md:text-3xl font-display text-nile-dark mt-12 mb-4';
const p = 'text-nile-dark/80 font-body text-base leading-relaxed mb-4';
const ul = 'list-disc list-outside ml-6 text-nile-dark/80 font-body space-y-2 mb-4';
const li = 'leading-relaxed';
const a = 'text-solar hover:text-solar-light underline transition-colors';
const strong = 'text-nile-dark font-semibold';

function CookieEN() {
  return (
    <>
      <h2 className={h2}>About Cookies</h2>
      <p className={p}>
        This Cookie Policy explains how Nilium ("Company," "we," "us," "our") uses cookies and
        similar technologies to recognize you when you visit our website at{' '}
        <a href="https://nilium-sandy.vercel.app" className={a}>
          https://nilium-sandy.vercel.app
        </a>{' '}
        ("Website").
      </p>
      <p className={p}>
        It explains what these technologies are and why we use them, as well as your rights to
        control our use of them.
      </p>

      <h2 className={h2}>What are cookies?</h2>
      <p className={p}>
        Cookies are small data files placed on your computer or mobile device when you visit a
        website. Cookies are widely used by website owners to make their websites work efficiently
        and to provide reporting information.
      </p>
      <p className={p}>
        Cookies set by the website owner (in this case, Nilium) are called "first-party cookies."
        Cookies set by parties other than the website owner are called "third-party cookies."
        Third-party cookies enable features or functionality on or through the website (e.g.,
        analytics).
      </p>

      <h2 className={h2}>Why do we use cookies?</h2>
      <p className={p}>We use first- and third-party cookies for several reasons:</p>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Essential cookies:</strong> Required for the site to function
          (cart, checkout, language preferences, security)
        </li>
        <li className={li}>
          <strong className={strong}>Analytics cookies:</strong> Help us understand how visitors use
          the site (optional)
        </li>
        <li className={li}>
          <strong className={strong}>Marketing cookies:</strong> Used by third parties (Stripe,
          Klaviyo) for payment processing and email communication (optional)
        </li>
      </ul>

      <h2 className={h2}>How can you control cookies?</h2>
      <p className={p}>
        You have the right to decide whether to accept or reject cookies. Essential cookies cannot
        be rejected as they are strictly necessary to provide you with services.
      </p>
      <p className={p}>
        You can set or amend your web browser controls to accept or refuse cookies. For more
        information on how to manage cookies on the most popular browsers:
      </p>
      <ul className={ul}>
        <li className={li}>
          <a href="https://support.google.com/chrome/answer/95647" className={a} target="_blank" rel="noopener noreferrer">Chrome</a>
        </li>
        <li className={li}>
          <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className={a} target="_blank" rel="noopener noreferrer">Firefox</a>
        </li>
        <li className={li}>
          <a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" className={a} target="_blank" rel="noopener noreferrer">Safari</a>
        </li>
        <li className={li}>
          <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy" className={a} target="_blank" rel="noopener noreferrer">Edge</a>
        </li>
      </ul>

      <h2 className={h2}>Third-party services we use</h2>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Stripe</strong> (payment processing):{' '}
          <a href="https://stripe.com/privacy" className={a} target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>
        </li>
        <li className={li}>
          <strong className={strong}>Klaviyo</strong> (email marketing, if you subscribe):{' '}
          <a href="https://www.klaviyo.com/privacy" className={a} target="_blank" rel="noopener noreferrer">klaviyo.com/privacy</a>
        </li>
        <li className={li}>
          <strong className={strong}>Vercel</strong> (hosting):{' '}
          <a href="https://vercel.com/legal/privacy-policy" className={a} target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>
        </li>
      </ul>

      <h2 className={h2}>Updates</h2>
      <p className={p}>
        We may update this Cookie Policy from time to time. The date at the top indicates when it
        was last updated.
      </p>

      <h2 className={h2}>Contact</h2>
      <p className={p}>
        If you have any questions about our use of cookies, please email us at{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>nilium.official@gmail.com</a>{' '}
        or by post to:
      </p>
      <p className={p}>
        Nilium<br />
        Bodenackerweg 4<br />
        3053 Bern<br />
        Switzerland
      </p>
    </>
  );
}

function CookieDE() {
  return (
    <>
      <h2 className={h2}>Über Cookies</h2>
      <p className={p}>
        Diese Cookie-Richtlinie erläutert, wie Nilium ("Unternehmen", "wir", "uns", "unser")
        Cookies und ähnliche Technologien einsetzt, um Sie beim Besuch unserer Website unter{' '}
        <a href="https://nilium-sandy.vercel.app" className={a}>
          https://nilium-sandy.vercel.app
        </a>{' '}
        ("Website") zu erkennen.
      </p>
      <p className={p}>
        Es wird erläutert, was diese Technologien sind und warum wir sie verwenden, sowie Ihre
        Rechte zur Kontrolle unserer Nutzung.
      </p>

      <h2 className={h2}>Was sind Cookies?</h2>
      <p className={p}>
        Cookies sind kleine Datendateien, die auf Ihrem Computer oder Mobilgerät abgelegt werden,
        wenn Sie eine Website besuchen. Cookies werden von Website-Betreibern weitgehend genutzt, um
        ihre Websites effizient zu betreiben und Berichtsinformationen bereitzustellen.
      </p>
      <p className={p}>
        Cookies, die vom Website-Betreiber (in diesem Fall Nilium) gesetzt werden, heissen
        "Erstanbieter-Cookies." Cookies, die von anderen Parteien gesetzt werden, heissen
        "Drittanbieter-Cookies." Diese ermöglichen Funktionen auf oder über die Website (z. B.
        Analysen).
      </p>

      <h2 className={h2}>Warum verwenden wir Cookies?</h2>
      <p className={p}>Wir verwenden Erst- und Drittanbieter-Cookies aus verschiedenen Gründen:</p>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Notwendige Cookies:</strong> Erforderlich für die Funktionalität
          der Website (Warenkorb, Checkout, Spracheinstellungen, Sicherheit)
        </li>
        <li className={li}>
          <strong className={strong}>Analyse-Cookies:</strong> Helfen uns zu verstehen, wie Besucher
          die Website nutzen (optional)
        </li>
        <li className={li}>
          <strong className={strong}>Marketing-Cookies:</strong> Von Drittanbietern (Stripe,
          Klaviyo) für Zahlungsabwicklung und E-Mail-Kommunikation verwendet (optional)
        </li>
      </ul>

      <h2 className={h2}>Wie können Sie Cookies kontrollieren?</h2>
      <p className={p}>
        Sie haben das Recht zu entscheiden, ob Sie Cookies akzeptieren oder ablehnen möchten.
        Notwendige Cookies können nicht abgelehnt werden, da sie für die Bereitstellung der Dienste
        unbedingt erforderlich sind.
      </p>
      <p className={p}>
        Sie können Ihre Webbrowser-Einstellungen anpassen, um Cookies zu akzeptieren oder
        abzulehnen. Weitere Informationen zur Cookie-Verwaltung in den gängigsten Browsern:
      </p>
      <ul className={ul}>
        <li className={li}>
          <a href="https://support.google.com/chrome/answer/95647" className={a} target="_blank" rel="noopener noreferrer">Chrome</a>
        </li>
        <li className={li}>
          <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className={a} target="_blank" rel="noopener noreferrer">Firefox</a>
        </li>
        <li className={li}>
          <a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" className={a} target="_blank" rel="noopener noreferrer">Safari</a>
        </li>
        <li className={li}>
          <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy" className={a} target="_blank" rel="noopener noreferrer">Edge</a>
        </li>
      </ul>

      <h2 className={h2}>Von uns genutzte Drittanbieterdienste</h2>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Stripe</strong> (Zahlungsabwicklung):{' '}
          <a href="https://stripe.com/privacy" className={a} target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>
        </li>
        <li className={li}>
          <strong className={strong}>Klaviyo</strong> (E-Mail-Marketing, bei Newsletter-Anmeldung):{' '}
          <a href="https://www.klaviyo.com/privacy" className={a} target="_blank" rel="noopener noreferrer">klaviyo.com/privacy</a>
        </li>
        <li className={li}>
          <strong className={strong}>Vercel</strong> (Hosting):{' '}
          <a href="https://vercel.com/legal/privacy-policy" className={a} target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>
        </li>
      </ul>

      <h2 className={h2}>Aktualisierungen</h2>
      <p className={p}>
        Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Das Datum oben gibt an,
        wann sie zuletzt aktualisiert wurde.
      </p>

      <h2 className={h2}>Kontakt</h2>
      <p className={p}>
        Bei Fragen zur Verwendung von Cookies senden Sie uns bitte eine E-Mail an{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>nilium.official@gmail.com</a>{' '}
        oder schreiben Sie uns per Post an:
      </p>
      <p className={p}>
        Nilium<br />
        Bodenackerweg 4<br />
        3053 Bern<br />
        Schweiz
      </p>
    </>
  );
}

function CookieFR() {
  return (
    <>
      <h2 className={h2}>À propos des cookies</h2>
      <p className={p}>
        La présente politique des cookies explique comment Nilium (« Société », « nous », « notre »)
        utilise les cookies et les technologies similaires pour vous reconnaître lorsque vous visitez
        notre site web à l'adresse{' '}
        <a href="https://nilium-sandy.vercel.app" className={a}>
          https://nilium-sandy.vercel.app
        </a>{' '}
        (« Site web »).
      </p>
      <p className={p}>
        Elle explique ce que sont ces technologies et pourquoi nous les utilisons, ainsi que vos
        droits à contrôler notre utilisation de celles-ci.
      </p>

      <h2 className={h2}>Que sont les cookies ?</h2>
      <p className={p}>
        Les cookies sont de petits fichiers de données placés sur votre ordinateur ou appareil
        mobile lorsque vous visitez un site web. Les cookies sont largement utilisés par les
        propriétaires de sites web pour faire fonctionner leurs sites de manière efficace et pour
        fournir des informations de rapport.
      </p>
      <p className={p}>
        Les cookies définis par le propriétaire du site web (en l'occurrence, Nilium) sont appelés
        « cookies propriétaires ». Les cookies définis par des tiers sont appelés « cookies tiers ».
        Les cookies tiers permettent des fonctionnalités sur ou via le site web (par ex. analyses).
      </p>

      <h2 className={h2}>Pourquoi utilisons-nous des cookies ?</h2>
      <p className={p}>Nous utilisons des cookies propriétaires et tiers pour plusieurs raisons :</p>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Cookies essentiels :</strong> Nécessaires au fonctionnement du
          site (panier, paiement, préférences linguistiques, sécurité)
        </li>
        <li className={li}>
          <strong className={strong}>Cookies d'analyse :</strong> Nous aident à comprendre comment
          les visiteurs utilisent le site (optionnel)
        </li>
        <li className={li}>
          <strong className={strong}>Cookies marketing :</strong> Utilisés par des tiers (Stripe,
          Klaviyo) pour le traitement des paiements et la communication par e-mail (optionnel)
        </li>
      </ul>

      <h2 className={h2}>Comment pouvez-vous contrôler les cookies ?</h2>
      <p className={p}>
        Vous avez le droit de décider d'accepter ou de refuser les cookies. Les cookies essentiels
        ne peuvent pas être refusés car ils sont strictement nécessaires pour vous fournir des
        services.
      </p>
      <p className={p}>
        Vous pouvez définir ou modifier les contrôles de votre navigateur web pour accepter ou
        refuser les cookies. Pour plus d'informations sur la gestion des cookies dans les navigateurs
        les plus courants :
      </p>
      <ul className={ul}>
        <li className={li}>
          <a href="https://support.google.com/chrome/answer/95647" className={a} target="_blank" rel="noopener noreferrer">Chrome</a>
        </li>
        <li className={li}>
          <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className={a} target="_blank" rel="noopener noreferrer">Firefox</a>
        </li>
        <li className={li}>
          <a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" className={a} target="_blank" rel="noopener noreferrer">Safari</a>
        </li>
        <li className={li}>
          <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy" className={a} target="_blank" rel="noopener noreferrer">Edge</a>
        </li>
      </ul>

      <h2 className={h2}>Services tiers que nous utilisons</h2>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Stripe</strong> (traitement des paiements) :{' '}
          <a href="https://stripe.com/privacy" className={a} target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>
        </li>
        <li className={li}>
          <strong className={strong}>Klaviyo</strong> (marketing par e-mail, si vous vous abonnez) :{' '}
          <a href="https://www.klaviyo.com/privacy" className={a} target="_blank" rel="noopener noreferrer">klaviyo.com/privacy</a>
        </li>
        <li className={li}>
          <strong className={strong}>Vercel</strong> (hébergement) :{' '}
          <a href="https://vercel.com/legal/privacy-policy" className={a} target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>
        </li>
      </ul>

      <h2 className={h2}>Mises à jour</h2>
      <p className={p}>
        Nous pouvons mettre à jour cette politique des cookies de temps à autre. La date en haut
        indique quand elle a été mise à jour pour la dernière fois.
      </p>

      <h2 className={h2}>Contact</h2>
      <p className={p}>
        Si vous avez des questions sur notre utilisation des cookies, veuillez nous envoyer un
        e-mail à{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>nilium.official@gmail.com</a>{' '}
        ou par courrier à :
      </p>
      <p className={p}>
        Nilium<br />
        Bodenackerweg 4<br />
        3053 Bern<br />
        Suisse
      </p>
    </>
  );
}

export const CookiePolicy: React.FC<{ lang: Language }> = ({ lang: initialLang }) => {
  const [lang, setLang] = useState<Language>(initialLang ?? detectLanguage());

  const handleLangChange = (l: Language) => {
    setLang(l);
    localStorage.setItem('nilium-lang', l);
  };

  return (
    <LegalPageLayout
      title={{ en: 'Cookie Policy', de: 'Cookie-Richtlinie', fr: 'Politique des cookies' }}
      lastUpdated={{ en: 'May 13, 2026', de: '13. Mai 2026', fr: '13 mai 2026' }}
      lang={lang}
      onLangChange={handleLangChange}
    >
      {lang === 'de' ? <CookieDE /> : lang === 'fr' ? <CookieFR /> : <CookieEN />}
    </LegalPageLayout>
  );
};
