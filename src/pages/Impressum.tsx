import React, { useState } from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import type { Language } from '../i18n';

const h2 = 'text-2xl md:text-3xl font-display text-nile-dark mt-12 mb-4';
const p = 'text-nile-dark/80 font-body text-base leading-relaxed mb-4';
const a = 'text-solar hover:text-solar-light underline transition-colors';

function ImpressumEN() {
  return (
    <>
      <h2 className={h2}>Operator of the Website</h2>
      <p className={p}>
        Nilium<br />
        Sole Proprietorship (Einzelfirma)<br />
        Bodenackerweg 4<br />
        3053 Bern<br />
        Switzerland
      </p>

      <h2 className={h2}>Contact</h2>
      <p className={p}>
        Email:{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
      </p>

      <h2 className={h2}>Responsible for Content</h2>
      <p className={p}>Diana (Owner)<br />Address as above.</p>

      <h2 className={h2}>Disclaimer</h2>
      <p className={p}>
        The author assumes no liability for the correctness, accuracy, timeliness, reliability, or
        completeness of the information provided. Liability claims for material or immaterial damage
        caused by the use or non-use of the information published, or by the use of incorrect or
        incomplete information, are excluded.
      </p>
      <p className={p}>
        All offers are non-binding. The author expressly reserves the right to alter, supplement, or
        delete parts of the pages or the entire offer without prior notice, or to discontinue
        publication temporarily or permanently.
      </p>

      <h2 className={h2}>Liability for Links</h2>
      <p className={p}>
        References and links to third-party websites are outside our area of responsibility. We
        reject all responsibility for such websites. Access to and use of such websites is at the
        user's own risk.
      </p>

      <h2 className={h2}>Copyright</h2>
      <p className={p}>
        The copyright and all other rights to content, images, photos, or other files on this
        website belong exclusively to Nilium or the specifically named rights holders. Written
        permission must be obtained in advance for the reproduction of any elements.
      </p>

      <h2 className={h2}>Applicable Law and Jurisdiction</h2>
      <p className={p}>
        This legal notice and all related legal matters are governed exclusively by Swiss law. The
        exclusive place of jurisdiction is Bern, Switzerland.
      </p>
    </>
  );
}

function ImpressumDE() {
  return (
    <>
      <h2 className={h2}>Betreiber der Website</h2>
      <p className={p}>
        Nilium<br />
        Einzelfirma<br />
        Bodenackerweg 4<br />
        3053 Bern<br />
        Schweiz
      </p>

      <h2 className={h2}>Kontakt</h2>
      <p className={p}>
        E-Mail:{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
      </p>

      <h2 className={h2}>Verantwortlich für den Inhalt</h2>
      <p className={p}>Diana (Inhaberin)<br />Adresse wie oben.</p>

      <h2 className={h2}>Haftungsausschluss</h2>
      <p className={p}>
        Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
        Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen
        den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der
        Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung
        oder durch technische Störungen entstanden sind, werden ausgeschlossen.
      </p>
      <p className={p}>
        Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der
        Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu
        löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
      </p>

      <h2 className={h2}>Haftung für Links</h2>
      <p className={p}>
        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs.
        Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung
        solcher Webseiten erfolgen auf eigene Gefahr des Nutzers.
      </p>

      <h2 className={h2}>Urheberrecht</h2>
      <p className={p}>
        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf
        der Website gehören ausschliesslich Nilium oder den speziell genannten Rechtsinhabern. Für
        die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der
        Urheberrechtsträger im Voraus einzuholen.
      </p>

      <h2 className={h2}>Geltendes Recht und Gerichtsstand</h2>
      <p className={p}>
        Dieses Impressum und alle damit zusammenhängenden rechtlichen Angelegenheiten unterliegen
        ausschliesslich schweizerischem Recht. Ausschliesslicher Gerichtsstand ist Bern, Schweiz.
      </p>
    </>
  );
}

export const Impressum: React.FC<{ lang: Language }> = ({ lang: initialLang }) => {
  const [lang, setLang] = useState<Language>(initialLang);

  const handleLangChange = (l: Language) => {
    setLang(l);
    localStorage.setItem('nilium-lang', l);
  };

  return (
    <LegalPageLayout
      title={{ en: 'Legal Notice (Impressum)', de: 'Impressum' }}
      lastUpdated={{ en: 'May 13, 2026', de: '13. Mai 2026' }}
      lang={lang}
      onLangChange={handleLangChange}
    >
      {lang === 'de' ? <ImpressumDE /> : <ImpressumEN />}
    </LegalPageLayout>
  );
};
