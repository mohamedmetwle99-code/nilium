import React, { useState } from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import type { Language } from '../i18n';
import { detectLanguage } from '../i18n';

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
      <p className={p}>M. Atteya (Owner)<br />Address as above.</p>

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

      <h2 className={h2}>Product Safety Notice</h2>
      <p className={p}>
        Our scented candles are consumer products subject to applicable safety regulations. All
        candles carry the required safety labelling on their packaging. Please read and follow all
        safety instructions before use:
      </p>
      <p className={p}>
        Never leave a burning candle unattended. Keep away from children, pets, and flammable
        materials. Burn on a heat-resistant surface, away from drafts. Trim the wick to 5 mm before
        each use. Do not burn for more than 4 hours at a time. Stop use when 10 mm of wax remains.
      </p>
      <p className={p}>
        Fragrance ingredients are listed on each product page and on the packaging. If you experience
        an adverse reaction, discontinue use immediately and seek medical advice if necessary. For
        further product safety information, please contact us at{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>.
      </p>

      <h2 className={h2}>Withdrawal Right and Returns</h2>
      <p className={p}>
        Consumers resident in Switzerland or the European Economic Area have the right to withdraw
        from a distance contract within 14 days of receiving their order, without giving any reason.
        To exercise this right, please notify us by email at{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>{' '}
        within the 14-day period.
      </p>
      <p className={p}>
        Returned items must be unused, in their original condition, and in original packaging.
        Return shipping costs are borne by the customer unless the item is defective or incorrectly
        delivered. Refunds are processed within 14 days of receiving the returned goods via the
        original payment method.
      </p>
      <p className={p}>
        For hygiene reasons, opened sachets and candles that have been burned are excluded from
        the right of return unless they are defective. Full details are set out in our{' '}
        <a href="/terms" className={a}>Terms of Service</a>.
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
      <p className={p}>M. Atteya (Inhaber)<br />Adresse wie oben.</p>

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

      <h2 className={h2}>Produktsicherheitshinweis</h2>
      <p className={p}>
        Unsere Duftkerzen sind Verbraucherprodukte, die den anwendbaren Sicherheitsvorschriften
        unterliegen. Alle Kerzen tragen die erforderlichen Sicherheitskennzeichnungen auf ihrer
        Verpackung. Bitte lesen und befolgen Sie alle Sicherheitshinweise vor der Verwendung:
      </p>
      <p className={p}>
        Brennende Kerzen niemals unbeaufsichtigt lassen. Von Kindern, Haustieren und brennbaren
        Materialien fernhalten. Auf einer hitzebeständigen Unterlage, abseits von Zugluft,
        aufstellen. Den Docht vor jeder Verwendung auf 5 mm kürzen. Nicht länger als 4 Stunden
        am Stück brennen lassen. Nutzung einstellen, wenn noch 10 mm Wachs verbleiben.
      </p>
      <p className={p}>
        Die Duftstoffinhaltsstoffe sind auf jeder Produktseite und auf der Verpackung aufgeführt.
        Falls Sie eine unerwünschte Reaktion bemerken, verwenden Sie das Produkt sofort nicht mehr
        und suchen Sie bei Bedarf ärztlichen Rat. Für weitere Produktsicherheitsinformationen
        kontaktieren Sie uns bitte unter{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>.
      </p>

      <h2 className={h2}>Widerrufsrecht und Rückgaben</h2>
      <p className={p}>
        Verbraucher mit Wohnsitz in der Schweiz oder im Europäischen Wirtschaftsraum haben das
        Recht, innerhalb von 14 Tagen nach Erhalt ihrer Bestellung ohne Angabe von Gründen von
        einem Fernabsatzvertrag zurückzutreten. Um dieses Recht auszuüben, informieren Sie uns
        bitte per E-Mail an{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>{' '}
        innerhalb der 14-tägigen Frist.
      </p>
      <p className={p}>
        Zurückgesandte Artikel müssen unbenutzt, in einwandfreiem Originalzustand und in der
        Originalverpackung sein. Die Rücksendekosten gehen zu Lasten des Kunden, es sei denn,
        der Artikel ist defekt oder falsch geliefert worden. Rückerstattungen werden innerhalb
        von 14 Tagen nach Erhalt der zurückgesandten Ware über die ursprüngliche Zahlungsmethode
        verarbeitet.
      </p>
      <p className={p}>
        Aus hygienischen Gründen sind geöffnete Duftsäckchen und bereits gebrannte Kerzen vom
        Rückgaberecht ausgeschlossen, sofern sie nicht defekt sind. Vollständige Details sind
        in unseren{' '}
        <a href="/terms" className={a}>Nutzungsbedingungen</a> aufgeführt.
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

function ImpressumFR() {
  return (
    <>
      <h2 className={h2}>Exploitant du site web</h2>
      <p className={p}>
        Nilium<br />
        Entreprise individuelle (Einzelfirma)<br />
        Bodenackerweg 4<br />
        3053 Bern<br />
        Suisse
      </p>

      <h2 className={h2}>Contact</h2>
      <p className={p}>
        E-mail :{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
      </p>

      <h2 className={h2}>Responsable du contenu</h2>
      <p className={p}>M. Atteya (Propriétaire)<br />Adresse comme ci-dessus.</p>

      <h2 className={h2}>Avis de non-responsabilité</h2>
      <p className={p}>
        L'auteur n'assume aucune responsabilité quant à l'exactitude, la précision, l'actualité,
        la fiabilité ou l'exhaustivité des informations fournies. Les demandes de responsabilité
        pour dommages matériels ou immatériels résultant de l'accès ou de l'utilisation ou de la
        non-utilisation des informations publiées, ou résultant de l'utilisation d'informations
        incorrectes ou incomplètes, sont exclues.
      </p>
      <p className={p}>
        Toutes les offres sont sans engagement. L'auteur se réserve expressément le droit de
        modifier, compléter ou supprimer des parties des pages ou l'ensemble de l'offre sans
        préavis, ou d'interrompre temporairement ou définitivement leur publication.
      </p>

      <h2 className={h2}>Responsabilité pour les liens</h2>
      <p className={p}>
        Les références et les liens vers des sites web tiers échappent à notre domaine de
        responsabilité. Nous déclinons toute responsabilité pour ces sites web. L'accès et
        l'utilisation de ces sites web se font aux risques et périls de l'utilisateur.
      </p>

      <h2 className={h2}>Avis de sécurité produit</h2>
      <p className={p}>
        Nos bougies parfumées sont des produits de consommation soumis aux réglementations de
        sécurité applicables. Toutes les bougies portent les mentions de sécurité requises sur
        leur emballage. Veuillez lire et respecter toutes les consignes de sécurité avant
        utilisation :
      </p>
      <p className={p}>
        Ne jamais laisser une bougie allumée sans surveillance. Tenir hors de la portée des
        enfants, des animaux et des matières inflammables. Placer sur une surface résistante à
        la chaleur, à l'abri des courants d'air. Couper la mèche à 5 mm avant chaque utilisation.
        Ne pas brûler plus de 4 heures consécutives. Cesser l'utilisation lorsqu'il reste 10 mm
        de cire.
      </p>
      <p className={p}>
        Les ingrédients odorants sont indiqués sur chaque page produit et sur l'emballage. En cas
        de réaction indésirable, cessez immédiatement l'utilisation et consultez un médecin si
        nécessaire. Pour plus d'informations sur la sécurité des produits, veuillez nous contacter
        à l'adresse{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>.
      </p>

      <h2 className={h2}>Droit de rétractation et retours</h2>
      <p className={p}>
        Les consommateurs résidant en Suisse ou dans l'Espace économique européen ont le droit
        de se rétracter d'un contrat à distance dans un délai de 14 jours suivant la réception
        de leur commande, sans avoir à motiver leur décision. Pour exercer ce droit, veuillez
        nous informer par e-mail à l'adresse{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>{' '}
        dans le délai de 14 jours.
      </p>
      <p className={p}>
        Les articles retournés doivent être non utilisés, en état d'origine et dans leur
        emballage d'origine. Les frais de retour sont à la charge du client, sauf si l'article
        est défectueux ou livré incorrectement. Les remboursements sont traités dans les 14
        jours suivant la réception des marchandises retournées, via le mode de paiement d'origine.
      </p>
      <p className={p}>
        Pour des raisons d'hygiène, les sachets ouverts et les bougies ayant été allumées sont
        exclus du droit de retour, sauf s'ils sont défectueux. Les détails complets figurent dans
        nos{' '}
        <a href="/terms" className={a}>Conditions d'utilisation</a>.
      </p>

      <h2 className={h2}>Droits d'auteur</h2>
      <p className={p}>
        Les droits d'auteur et tous les autres droits sur les contenus, images, photos ou autres
        fichiers de ce site web appartiennent exclusivement à Nilium ou aux détenteurs de droits
        spécifiquement nommés. Une autorisation écrite doit être obtenue préalablement à la
        reproduction de tout élément.
      </p>

      <h2 className={h2}>Droit applicable et juridiction</h2>
      <p className={p}>
        Les présentes mentions légales et toutes les questions juridiques y afférentes sont
        exclusivement régies par le droit suisse. Le for exclusif est Berne, Suisse.
      </p>
    </>
  );
}

export const Impressum: React.FC<{ lang: Language }> = ({ lang: initialLang }) => {
  const [lang, setLang] = useState<Language>(initialLang ?? detectLanguage());

  const handleLangChange = (l: Language) => {
    setLang(l);
    localStorage.setItem('nilium-lang', l);
  };

  return (
    <LegalPageLayout
      title={{ en: 'Legal Notice (Impressum)', de: 'Impressum', fr: 'Mentions légales' }}
      lastUpdated={{ en: 'May 13, 2026', de: '13. Mai 2026', fr: '13 mai 2026' }}
      lang={lang}
      onLangChange={handleLangChange}
    >
      {lang === 'de' ? <ImpressumDE /> : lang === 'fr' ? <ImpressumFR /> : <ImpressumEN />}
    </LegalPageLayout>
  );
};
