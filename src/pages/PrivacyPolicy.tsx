import React, { useState } from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import type { Language } from '../i18n';

const h2 = 'text-2xl md:text-3xl font-display text-nile-dark mt-12 mb-4';
const h3 = 'text-lg md:text-xl font-display text-nile-dark mt-8 mb-3';
const p = 'text-nile-dark/80 font-body text-base leading-relaxed mb-4';
const ul = 'list-disc list-outside ml-6 text-nile-dark/80 font-body space-y-2 mb-4';
const li = 'leading-relaxed';
const a = 'text-solar hover:text-solar-light underline transition-colors';
const strong = 'text-nile-dark font-semibold';

function PrivacyEN() {
  return (
    <>
      <h2 className={h2}>Introduction</h2>
      <p className={p}>
        This Privacy Notice for Nilium ("we," "us," or "our") describes how and why we might access,
        collect, store, use, and/or share ("process") your personal information when you use our
        services, including when you:
      </p>
      <ul className={ul}>
        <li className={li}>
          Visit our website at{' '}
          <a href="https://nilium-sandy.vercel.app" className={a}>
            https://nilium-sandy.vercel.app
          </a>{' '}
          or any website of ours that links to this Privacy Notice
        </li>
        <li className={li}>Use our products: Nilium soy wax candles and scented sachets</li>
        <li className={li}>
          Engage with us in other related ways, including any marketing or events
        </li>
      </ul>
      <p className={p}>
        <strong className={strong}>Questions or concerns?</strong> Reading this Privacy Notice will
        help you understand your privacy rights and choices. We are responsible for making decisions
        about how your personal information is processed. If you do not agree with our policies and
        practices, please do not use our Services. If you still have any questions or concerns,
        please contact us at{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
        .
      </p>

      <h2 className={h2}>1. What information do we collect?</h2>
      <h3 className={h3}>Personal information you disclose to us</h3>
      <p className={p}>
        <strong className={strong}><em>In Short:</em></strong>{' '}
        <em>We collect personal information that you provide to us.</em>
      </p>
      <p className={p}>
        We collect personal information that you voluntarily provide to us when you express an
        interest in obtaining information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us.
      </p>
      <p className={p}>
        <strong className={strong}>Personal Information Provided by You.</strong> The personal
        information that we collect depends on the context of your interactions with us and the
        Services. The personal information we collect may include:
      </p>
      <ul className={ul}>
        <li className={li}>Names</li>
        <li className={li}>Phone numbers</li>
        <li className={li}>Email addresses</li>
        <li className={li}>Billing addresses</li>
        <li className={li}>Mailing addresses</li>
        <li className={li}>Debit/credit card numbers</li>
        <li className={li}>Contact or authentication data</li>
        <li className={li}>Contact preferences</li>
      </ul>
      <p className={p}>
        <strong className={strong}>Sensitive Information.</strong> We do not process sensitive
        information.
      </p>
      <p className={p}>
        <strong className={strong}>Payment Data.</strong> We may collect data necessary to process
        your payment if you choose to make purchases, such as your payment instrument number, and
        the security code associated with your payment instrument. All payment data is handled and
        stored by Stripe. You may find their privacy notice link here:{' '}
        <a href="https://stripe.com/privacy" className={a} target="_blank" rel="noopener noreferrer">
          https://stripe.com/privacy
        </a>
        .
      </p>
      <p className={p}>
        All personal information that you provide to us must be true, complete, and accurate, and
        you must notify us of any changes to such personal information.
      </p>

      <h2 className={h2}>2. How do we process your information?</h2>
      <p className={p}>
        <strong className={strong}><em>In Short:</em></strong>{' '}
        <em>
          We process your information to provide, improve, and administer our Services, communicate
          with you, for security and fraud prevention, and to comply with law.
        </em>
      </p>
      <p className={p}>We process your personal information for a variety of reasons:</p>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>To deliver and facilitate delivery of services to the user.</strong>{' '}
          We may process your information to provide you with the requested service.
        </li>
        <li className={li}>
          <strong className={strong}>To respond to user inquiries.</strong> We may process your
          information to respond to your inquiries and solve any potential issues you might have.
        </li>
        <li className={li}>
          <strong className={strong}>To send administrative information to you.</strong> We may
          process your information to send you details about our products and services, changes to
          our terms and policies, and other similar information.
        </li>
        <li className={li}>
          <strong className={strong}>To save or protect an individual's vital interest.</strong> We
          may process your information when necessary to save or protect an individual's vital
          interest, such as to prevent harm.
        </li>
      </ul>

      <h2 className={h2}>3. What legal bases do we rely on?</h2>
      <p className={p}>
        The GDPR and UK GDPR require us to explain the valid legal bases we rely on:
      </p>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Consent.</strong> We may process your information if you have
          given us permission to use your personal information for a specific purpose. You can
          withdraw your consent at any time.
        </li>
        <li className={li}>
          <strong className={strong}>Performance of a Contract.</strong> We may process your
          personal information when necessary to fulfill our contractual obligations, including
          providing our Services.
        </li>
        <li className={li}>
          <strong className={strong}>Legal Obligations.</strong> We may process your information
          where it is necessary for compliance with our legal obligations.
        </li>
        <li className={li}>
          <strong className={strong}>Vital Interests.</strong> We may process your information
          where necessary to protect your vital interests or those of a third party.
        </li>
      </ul>

      <h2 className={h2}>4. When do we share your information?</h2>
      <p className={p}>We may share information in specific situations:</p>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Business Transfers.</strong> We may share or transfer your
          information in connection with any merger, sale of company assets, financing, or
          acquisition.
        </li>
        <li className={li}>
          <strong className={strong}>Service Providers.</strong> We may share your data with Stripe
          (payments) and Klaviyo (email marketing) to operate our Services.
        </li>
      </ul>

      <h2 className={h2}>5. Do we use cookies?</h2>
      <p className={p}>
        Yes. We use cookies and similar tracking technologies. For details, see our{' '}
        <a href="/cookies" className={a}>Cookie Policy</a>.
      </p>

      <h2 className={h2}>6. How long do we keep your information?</h2>
      <p className={p}>
        We keep your personal information for as long as necessary to fulfill the purposes outlined
        in this Privacy Notice, unless a longer retention period is required by law (such as tax or
        accounting requirements).
      </p>

      <h2 className={h2}>7. How do we keep your information safe?</h2>
      <p className={p}>
        We have implemented appropriate technical and organizational security measures designed to
        protect your personal information. However, no electronic transmission over the internet can
        be guaranteed to be 100% secure.
      </p>

      <h2 className={h2}>8. What are your privacy rights?</h2>
      <p className={p}>
        In some regions (like the EEA, UK, and Switzerland), you have rights under data protection
        laws. These may include the right to: (i) request access and obtain a copy of your personal
        information, (ii) request rectification or erasure, (iii) restrict the processing,
        (iv) data portability, and (v) not to be subject to automated decision-making.
      </p>
      <p className={p}>
        To exercise your rights, contact us at{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
        .
      </p>
      <p className={p}>
        If you are located in Switzerland, you may contact the{' '}
        <a
          href="https://www.edoeb.admin.ch/edoeb/en/home.html"
          className={a}
          target="_blank"
          rel="noopener noreferrer"
        >
          Federal Data Protection and Information Commissioner
        </a>
        .
      </p>

      <h2 className={h2}>9. Do we make updates to this notice?</h2>
      <p className={p}>
        We may update this Privacy Notice from time to time. The updated version will be indicated
        by an updated "Last updated" date at the top of this Privacy Notice.
      </p>

      <h2 className={h2}>10. How can you contact us?</h2>
      <p className={p}>
        If you have questions or comments about this notice, you may email us at{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>{' '}
        or contact us by post at:
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

function PrivacyDE() {
  return (
    <>
      <h2 className={h2}>Einführung</h2>
      <p className={p}>
        Diese Datenschutzerklärung für Nilium ("wir", "uns" oder "unser") beschreibt, wie und warum
        wir auf Ihre personenbezogenen Daten zugreifen, diese erheben, speichern, verwenden und/oder
        teilen ("verarbeiten") können, wenn Sie unsere Dienste nutzen, unter anderem wenn Sie:
      </p>
      <ul className={ul}>
        <li className={li}>
          Unsere Website unter{' '}
          <a href="https://nilium-sandy.vercel.app" className={a}>
            https://nilium-sandy.vercel.app
          </a>{' '}
          oder eine andere unserer Websites, die auf diese Datenschutzerklärung verweist, besuchen
        </li>
        <li className={li}>
          Unsere Produkte nutzen: Nilium Sojawachskerzen und Duftsachets
        </li>
        <li className={li}>
          Auf andere damit zusammenhängende Weise mit uns interagieren, einschliesslich Marketing
          oder Veranstaltungen
        </li>
      </ul>
      <p className={p}>
        <strong className={strong}>Fragen oder Bedenken?</strong> Das Lesen dieser
        Datenschutzerklärung wird Ihnen helfen, Ihre Datenschutzrechte und -optionen zu verstehen.
        Wir sind verantwortlich für Entscheidungen darüber, wie Ihre personenbezogenen Daten
        verarbeitet werden. Wenn Sie mit unseren Richtlinien und Praktiken nicht einverstanden sind,
        nutzen Sie bitte unsere Dienste nicht. Bei weiteren Fragen oder Bedenken kontaktieren Sie
        uns bitte unter{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
        .
      </p>

      <h2 className={h2}>1. Welche Informationen sammeln wir?</h2>
      <h3 className={h3}>Personenbezogene Daten, die Sie uns mitteilen</h3>
      <p className={p}>
        <strong className={strong}><em>Kurz gesagt:</em></strong>{' '}
        <em>Wir erheben personenbezogene Daten, die Sie uns mitteilen.</em>
      </p>
      <p className={p}>
        Wir erheben personenbezogene Daten, die Sie uns freiwillig mitteilen, wenn Sie Interesse an
        der Einholung von Informationen über uns oder unsere Produkte und Dienste bekunden, wenn Sie
        an Aktivitäten auf den Diensten teilnehmen oder wenn Sie uns anderweitig kontaktieren.
      </p>
      <p className={p}>
        <strong className={strong}>Von Ihnen bereitgestellte personenbezogene Daten.</strong> Die
        von uns erhobenen personenbezogenen Daten hängen vom Kontext Ihrer Interaktionen mit uns
        und den Diensten ab. Wir können folgende personenbezogene Daten erheben:
      </p>
      <ul className={ul}>
        <li className={li}>Namen</li>
        <li className={li}>Telefonnummern</li>
        <li className={li}>E-Mail-Adressen</li>
        <li className={li}>Rechnungsadressen</li>
        <li className={li}>Lieferadressen</li>
        <li className={li}>Debit-/Kreditkartennummern</li>
        <li className={li}>Kontakt- oder Authentifizierungsdaten</li>
        <li className={li}>Kontaktpräferenzen</li>
      </ul>
      <p className={p}>
        <strong className={strong}>Sensible Daten.</strong> Wir verarbeiten keine sensiblen Daten.
      </p>
      <p className={p}>
        <strong className={strong}>Zahlungsdaten.</strong> Wir können Daten erheben, die zur
        Verarbeitung Ihrer Zahlung erforderlich sind, wie z. B. Ihre Zahlungsinstrumentnummer und
        den zugehörigen Sicherheitscode. Alle Zahlungsdaten werden von Stripe verarbeitet und
        gespeichert. Deren Datenschutzerklärung finden Sie hier:{' '}
        <a href="https://stripe.com/privacy" className={a} target="_blank" rel="noopener noreferrer">
          https://stripe.com/privacy
        </a>
        .
      </p>
      <p className={p}>
        Alle personenbezogenen Daten, die Sie uns mitteilen, müssen wahr, vollständig und korrekt
        sein, und Sie müssen uns über Änderungen informieren.
      </p>

      <h2 className={h2}>2. Wie verarbeiten wir Ihre Informationen?</h2>
      <p className={p}>
        <strong className={strong}><em>Kurz gesagt:</em></strong>{' '}
        <em>
          Wir verarbeiten Ihre Informationen, um unsere Dienste bereitzustellen, zu verbessern und
          zu verwalten, mit Ihnen zu kommunizieren sowie zur Sicherheit, Betrugsprävention und zur
          Einhaltung gesetzlicher Vorschriften.
        </em>
      </p>
      <p className={p}>Wir verarbeiten Ihre personenbezogenen Daten aus verschiedenen Gründen:</p>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Zur Bereitstellung und Ermöglichung der Dienstleistungen.</strong>{' '}
          Wir können Ihre Daten verarbeiten, um Ihnen die angeforderten Dienste zu erbringen.
        </li>
        <li className={li}>
          <strong className={strong}>Zur Beantwortung von Nutzeranfragen.</strong> Wir können Ihre
          Daten verarbeiten, um auf Ihre Anfragen zu antworten und mögliche Probleme zu lösen.
        </li>
        <li className={li}>
          <strong className={strong}>Zur Zusendung von Verwaltungsinformationen.</strong> Wir können
          Ihre Daten verarbeiten, um Ihnen Details über unsere Produkte und Dienste sowie Änderungen
          unserer Bedingungen und Richtlinien mitzuteilen.
        </li>
        <li className={li}>
          <strong className={strong}>Zum Schutz lebenswichtiger Interessen.</strong> Wir können Ihre
          Daten verarbeiten, wenn dies erforderlich ist, um lebenswichtige Interessen zu schützen,
          z. B. zur Schadensabwendung.
        </li>
      </ul>

      <h2 className={h2}>3. Auf welche rechtlichen Grundlagen stützen wir uns?</h2>
      <p className={p}>
        Die DSGVO und UK GDPR verlangen von uns die Erläuterung der gültigen Rechtsgrundlagen:
      </p>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Einwilligung.</strong> Wir können Ihre Daten verarbeiten, wenn
          Sie uns die Erlaubnis erteilt haben, Ihre personenbezogenen Daten für einen bestimmten
          Zweck zu verwenden. Sie können Ihre Einwilligung jederzeit widerrufen.
        </li>
        <li className={li}>
          <strong className={strong}>Vertragserfüllung.</strong> Wir können Ihre personenbezogenen
          Daten verarbeiten, wenn dies zur Erfüllung unserer vertraglichen Verpflichtungen
          erforderlich ist, einschliesslich der Bereitstellung unserer Dienste.
        </li>
        <li className={li}>
          <strong className={strong}>Rechtliche Verpflichtungen.</strong> Wir können Ihre Daten
          verarbeiten, wenn dies zur Erfüllung unserer gesetzlichen Verpflichtungen erforderlich
          ist.
        </li>
        <li className={li}>
          <strong className={strong}>Lebenswichtige Interessen.</strong> Wir können Ihre Daten
          verarbeiten, wenn dies zum Schutz Ihrer lebenswichtigen Interessen oder der eines Dritten
          erforderlich ist.
        </li>
      </ul>

      <h2 className={h2}>4. Wann geben wir Ihre Informationen weiter?</h2>
      <p className={p}>Wir können Informationen in bestimmten Situationen weitergeben:</p>
      <ul className={ul}>
        <li className={li}>
          <strong className={strong}>Unternehmensübertragungen.</strong> Wir können Ihre
          Informationen im Zusammenhang mit einer Fusion, dem Verkauf von Unternehmensvermögen,
          einer Finanzierung oder Übernahme weitergeben oder übertragen.
        </li>
        <li className={li}>
          <strong className={strong}>Dienstleister.</strong> Wir können Ihre Daten mit Stripe
          (Zahlungsabwicklung) und Klaviyo (E-Mail-Marketing) teilen, um unsere Dienste zu
          betreiben.
        </li>
      </ul>

      <h2 className={h2}>5. Verwenden wir Cookies?</h2>
      <p className={p}>
        Ja. Wir verwenden Cookies und ähnliche Tracking-Technologien. Einzelheiten finden Sie in
        unserer{' '}
        <a href="/cookies" className={a}>Cookie-Richtlinie</a>.
      </p>

      <h2 className={h2}>6. Wie lange speichern wir Ihre Informationen?</h2>
      <p className={p}>
        Wir speichern Ihre personenbezogenen Daten so lange, wie es zur Erfüllung der in dieser
        Datenschutzerklärung beschriebenen Zwecke erforderlich ist, sofern keine längere
        Aufbewahrungsfrist gesetzlich vorgeschrieben ist (z. B. für Steuer- oder
        Buchhaltungszwecke).
      </p>

      <h2 className={h2}>7. Wie schützen wir Ihre Informationen?</h2>
      <p className={p}>
        Wir haben geeignete technische und organisatorische Sicherheitsmassnahmen implementiert, um
        Ihre personenbezogenen Daten zu schützen. Allerdings kann keine elektronische Übertragung
        über das Internet zu 100 % als sicher garantiert werden.
      </p>

      <h2 className={h2}>8. Was sind Ihre Datenschutzrechte?</h2>
      <p className={p}>
        In bestimmten Regionen (wie dem EWR, dem Vereinigten Königreich und der Schweiz) haben Sie
        Rechte nach Datenschutzgesetzen. Dazu können gehören: (i) das Recht auf Auskunft und eine
        Kopie Ihrer personenbezogenen Daten, (ii) das Recht auf Berichtigung oder Löschung,
        (iii) das Recht auf Einschränkung der Verarbeitung, (iv) Datenübertragbarkeit sowie
        (v) das Recht, keiner automatisierten Entscheidungsfindung unterworfen zu werden.
      </p>
      <p className={p}>
        Um Ihre Rechte auszuüben, kontaktieren Sie uns unter{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
        .
      </p>
      <p className={p}>
        Wenn Sie sich in der Schweiz befinden, können Sie sich an den{' '}
        <a
          href="https://www.edoeb.admin.ch/edoeb/en/home.html"
          className={a}
          target="_blank"
          rel="noopener noreferrer"
        >
          Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten
        </a>{' '}
        wenden.
      </p>

      <h2 className={h2}>9. Nehmen wir Änderungen an dieser Erklärung vor?</h2>
      <p className={p}>
        Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Die aktualisierte
        Version wird durch ein aktualisiertes Datum "Zuletzt aktualisiert" am Anfang dieser
        Datenschutzerklärung angezeigt.
      </p>

      <h2 className={h2}>10. Wie können Sie uns kontaktieren?</h2>
      <p className={p}>
        Wenn Sie Fragen oder Anmerkungen zu dieser Erklärung haben, können Sie uns per E-Mail unter{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>{' '}
        oder per Post unter folgender Adresse erreichen:
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

export const PrivacyPolicy: React.FC<{ lang: Language }> = ({ lang: initialLang }) => {
  const [lang, setLang] = useState<Language>(initialLang);

  const handleLangChange = (l: Language) => {
    setLang(l);
    localStorage.setItem('nilium-lang', l);
  };

  return (
    <LegalPageLayout
      title={{ en: 'Privacy Policy', de: 'Datenschutzerklärung' }}
      lastUpdated={{ en: 'May 13, 2026', de: '13. Mai 2026' }}
      lang={lang}
      onLangChange={handleLangChange}
    >
      {lang === 'de' ? <PrivacyDE /> : <PrivacyEN />}
    </LegalPageLayout>
  );
};
