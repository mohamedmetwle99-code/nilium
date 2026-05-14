import React, { useState } from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import type { Language } from '../i18n';
import { detectLanguage } from '../i18n';

const h2 = 'text-2xl md:text-3xl font-display text-nile-dark mt-12 mb-4';
const p = 'text-nile-dark/80 font-body text-base leading-relaxed mb-4';
const ul = 'list-disc list-outside ml-6 text-nile-dark/80 font-body text-base leading-relaxed mb-4 space-y-1';
const a = 'text-solar hover:text-solar-light underline transition-colors';

function TermsEN() {
  return (
    <>
      <h2 className={h2}>1. About Us</h2>
      <p className={p}>
        These Terms of Service govern your use of the NILIUM website and the purchase of products offered
        thereon. NILIUM is a sole proprietorship (Einzelfirma) registered in Switzerland:
      </p>
      <p className={p}>
        Nilium<br />
        Bodenackerweg 4<br />
        3053 Bern<br />
        Switzerland<br />
        Email:{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
      </p>
      <p className={p}>
        By accessing our website or placing an order, you agree to be bound by these Terms. Please read
        them carefully before proceeding.
      </p>

      <h2 className={h2}>2. Products</h2>
      <p className={p}>
        All products offered on this website are handcrafted luxury home fragrance items, including
        scented candles, fragrance sachets, and gift sets. We take great care to describe our products
        accurately; however, slight colour variations may occur due to screen settings and the natural
        characteristics of handmade goods.
      </p>
      <p className={p}>
        Our candles are made with 100% natural soy wax, premium fragrance oils, and cotton wicks.
        Ingredients are listed on each product page. If you have known sensitivities to fragrance
        components, please review the ingredient list before purchasing.
      </p>

      <h2 className={h2}>3. Orders and Payment</h2>
      <p className={p}>
        By submitting an order, you make a binding offer to purchase the selected products. We reserve
        the right to refuse or cancel any order at our discretion, including in cases of pricing errors
        or unavailability.
      </p>
      <p className={p}>
        A contract of sale is concluded when we send you an order confirmation by email. Accepted payment
        methods include Visa, Mastercard, PayPal, TWINT, and PostFinance. All prices are displayed in
        Swiss Francs (CHF) and include applicable Swiss VAT.
      </p>

      <h2 className={h2}>4. Shipping</h2>
      <p className={p}>
        We ship to Switzerland and selected international destinations. Standard delivery within
        Switzerland takes 3–5 business days. International shipping times vary by destination.
        Shipping costs are calculated at checkout and are the responsibility of the customer unless
        a free shipping threshold is met.
      </p>
      <p className={p}>
        We are not liable for delays caused by customs, postal services, or events outside our control.
        Risk of loss passes to the buyer upon handover to the carrier.
      </p>

      <h2 className={h2}>5. Returns and Refunds</h2>
      <p className={p}>
        You have the right to withdraw from your purchase within 14 days of receiving your order,
        without giving any reason, in accordance with Swiss consumer law. To exercise this right,
        please contact us at{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>{' '}
        before returning the item.
      </p>
      <p className={p}>
        Products must be returned in their original, unused condition and packaging. Return shipping
        costs are borne by the customer unless the item is defective or incorrectly delivered. Refunds
        will be processed within 14 days of receiving the returned goods, using the original payment
        method.
      </p>
      <p className={p}>
        For hygiene reasons, opened sachets and candles that have been burned are excluded from the
        right of return unless they are defective.
      </p>

      <h2 className={h2}>6. Intellectual Property</h2>
      <p className={p}>
        All content on this website — including but not limited to text, images, photographs, the
        NILIUM name, logo, and brand identity — is the exclusive property of Nilium or its licensors
        and is protected by Swiss and international copyright law.
      </p>
      <p className={p}>
        You may not reproduce, distribute, modify, display, or use any content from this website for
        commercial purposes without prior written consent from NILIUM. Personal, non-commercial use
        is permitted provided that all copyright notices remain intact.
      </p>

      <h2 className={h2}>7. Use of the Website</h2>
      <p className={p}>
        You agree to use this website only for lawful purposes and in a manner that does not infringe
        the rights of others. You must not:
      </p>
      <ul className={ul}>
        <li>Attempt to gain unauthorised access to any part of the website or its infrastructure</li>
        <li>Transmit any malicious code, viruses, or harmful data</li>
        <li>Scrape, harvest, or collect data from the website by automated means</li>
        <li>Use the website to send unsolicited communications</li>
      </ul>
      <p className={p}>
        We reserve the right to restrict access to the website at any time without prior notice.
      </p>

      <h2 className={h2}>8. Warranties and Limitation of Liability</h2>
      <p className={p}>
        Our products are warranted to be free from defects in materials and workmanship at the time
        of delivery. This warranty does not cover damage caused by improper use, failure to follow
        safety instructions, or normal wear and tear.
      </p>
      <p className={p}>
        To the fullest extent permitted by Swiss law, NILIUM shall not be liable for any indirect,
        incidental, special, or consequential damages arising from the use of our products or website,
        including loss of profits, data, or goodwill.
      </p>
      <p className={p}>
        Nothing in these Terms excludes or limits our liability for death or personal injury caused
        by our negligence, or for fraud or fraudulent misrepresentation.
      </p>

      <h2 className={h2}>9. Candle Safety</h2>
      <p className={p}>
        Scented candles are fire hazards if used improperly. By purchasing and using our candles, you
        acknowledge that you have read and will follow the safety instructions provided on the product
        packaging and label.
      </p>
      <ul className={ul}>
        <li>Never leave a burning candle unattended</li>
        <li>Keep away from children, pets, and flammable materials</li>
        <li>Burn on a heat-resistant surface away from drafts</li>
        <li>Trim the wick to 5 mm before each use</li>
        <li>Do not burn for more than 4 hours at a time</li>
        <li>Stop use when 10 mm of wax remains</li>
      </ul>
      <p className={p}>
        NILIUM accepts no liability for damage, injury, or loss arising from failure to observe these
        safety instructions.
      </p>

      <h2 className={h2}>10. Privacy</h2>
      <p className={p}>
        Your personal data is processed in accordance with our{' '}
        <a href="/privacy" className={a}>Privacy Policy</a>, which forms part of these Terms.
        By using this website and placing orders, you consent to the processing of your data as
        described therein.
      </p>

      <h2 className={h2}>11. Changes to These Terms</h2>
      <p className={p}>
        We reserve the right to update these Terms of Service at any time. Changes will be posted on
        this page with a revised date. Continued use of the website after any changes constitutes your
        acceptance of the new Terms. We encourage you to review this page periodically.
      </p>

      <h2 className={h2}>12. Governing Law and Jurisdiction</h2>
      <p className={p}>
        These Terms are governed exclusively by Swiss law, to the exclusion of conflict-of-law
        rules and international treaties. The exclusive place of jurisdiction for all disputes
        arising from or in connection with these Terms is Bern, Switzerland, subject to any
        mandatory provisions of consumer protection law.
      </p>

      <h2 className={h2}>13. Contact</h2>
      <p className={p}>
        For any questions about these Terms, please contact us at:
      </p>
      <p className={p}>
        Nilium<br />
        Bodenackerweg 4<br />
        3053 Bern<br />
        Switzerland<br />
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
      </p>
    </>
  );
}

function TermsDE() {
  return (
    <>
      <h2 className={h2}>1. Über uns</h2>
      <p className={p}>
        Diese Nutzungsbedingungen regeln Ihre Nutzung der NILIUM-Website sowie den Kauf der dort
        angebotenen Produkte. NILIUM ist eine in der Schweiz eingetragene Einzelfirma:
      </p>
      <p className={p}>
        Nilium<br />
        Bodenackerweg 4<br />
        3053 Bern<br />
        Schweiz<br />
        E-Mail:{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
      </p>
      <p className={p}>
        Mit dem Zugriff auf unsere Website oder der Aufgabe einer Bestellung erklären Sie sich mit
        diesen Bedingungen einverstanden. Bitte lesen Sie diese sorgfältig, bevor Sie fortfahren.
      </p>

      <h2 className={h2}>2. Produkte</h2>
      <p className={p}>
        Alle auf dieser Website angebotenen Produkte sind handgefertigte Luxus-Raumdüfte, darunter
        Duftkerzen, Duftsäckchen und Geschenksets. Wir beschreiben unsere Produkte so genau wie
        möglich; aufgrund von Bildschirmeinstellungen und der natürlichen Eigenschaften handgefertigter
        Waren können jedoch leichte Farbabweichungen auftreten.
      </p>
      <p className={p}>
        Unsere Kerzen werden aus 100 % natürlichem Sojawachs, hochwertigen Duftstoffen und
        Baumwolldochten hergestellt. Die Inhaltsstoffe sind auf jeder Produktseite aufgeführt. Falls
        Sie bekannte Empfindlichkeiten gegenüber Duftstoffen haben, prüfen Sie bitte vor dem Kauf
        die Inhaltsstoffliste.
      </p>

      <h2 className={h2}>3. Bestellungen und Zahlung</h2>
      <p className={p}>
        Mit der Abgabe einer Bestellung machen Sie ein verbindliches Kaufangebot für die ausgewählten
        Produkte. Wir behalten uns das Recht vor, Bestellungen nach eigenem Ermessen abzulehnen oder
        zu stornieren, insbesondere bei Preisfehlern oder Nichtverfügbarkeit.
      </p>
      <p className={p}>
        Ein Kaufvertrag kommt zustande, wenn wir Ihnen eine Bestellbestätigung per E-Mail zusenden.
        Akzeptierte Zahlungsmethoden sind Visa, Mastercard, PayPal, TWINT und PostFinance. Alle Preise
        werden in Schweizer Franken (CHF) angegeben und enthalten die anwendbare Schweizer
        Mehrwertsteuer.
      </p>

      <h2 className={h2}>4. Versand</h2>
      <p className={p}>
        Wir versenden in die Schweiz und an ausgewählte internationale Destinationen. Die
        Standardlieferzeit innerhalb der Schweiz beträgt 3–5 Werktage. Internationale Lieferzeiten
        variieren je nach Zielort. Versandkosten werden beim Checkout berechnet und gehen zu Lasten
        des Kunden, sofern kein kostenloser Versandschwellenwert erreicht wird.
      </p>
      <p className={p}>
        Wir haften nicht für Verzögerungen durch Zoll, Postdienste oder Ereignisse ausserhalb unserer
        Kontrolle. Die Gefahr geht mit Übergabe an den Transporteur auf den Käufer über.
      </p>

      <h2 className={h2}>5. Rückgabe und Rückerstattung</h2>
      <p className={p}>
        Sie haben das Recht, Ihren Kauf innerhalb von 14 Tagen nach Erhalt Ihrer Bestellung ohne
        Angabe von Gründen zu widerrufen, gemäss dem Schweizer Konsumentenschutzrecht. Um dieses
        Recht auszuüben, kontaktieren Sie uns bitte unter{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>{' '}
        bevor Sie den Artikel zurücksenden.
      </p>
      <p className={p}>
        Produkte müssen in ihrem ursprünglichen, unbenutzten Zustand und in der Originalverpackung
        zurückgesendet werden. Die Rücksendekosten gehen zu Lasten des Kunden, es sei denn, der
        Artikel ist defekt oder falsch geliefert worden. Rückerstattungen werden innerhalb von 14
        Tagen nach Erhalt der zurückgesandten Ware über die ursprüngliche Zahlungsmethode verarbeitet.
      </p>
      <p className={p}>
        Aus hygienischen Gründen sind geöffnete Duftsäckchen und bereits gebrannte Kerzen vom
        Rückgaberecht ausgeschlossen, sofern sie nicht defekt sind.
      </p>

      <h2 className={h2}>6. Geistiges Eigentum</h2>
      <p className={p}>
        Alle Inhalte dieser Website — einschliesslich, aber nicht beschränkt auf Texte, Bilder,
        Fotografien, den Namen NILIUM, das Logo und die Markenidentität — sind ausschliessliches
        Eigentum von Nilium oder seinen Lizenzgebern und durch das Schweizer und internationale
        Urheberrecht geschützt.
      </p>
      <p className={p}>
        Sie dürfen keine Inhalte dieser Website ohne vorherige schriftliche Zustimmung von NILIUM für
        kommerzielle Zwecke vervielfältigen, verbreiten, verändern, anzeigen oder verwenden. Die
        persönliche, nicht-kommerzielle Nutzung ist gestattet, sofern alle Urheberrechtshinweise
        intakt bleiben.
      </p>

      <h2 className={h2}>7. Nutzung der Website</h2>
      <p className={p}>
        Sie stimmen zu, diese Website nur für rechtmässige Zwecke und auf eine Weise zu nutzen, die
        die Rechte anderer nicht verletzt. Es ist untersagt:
      </p>
      <ul className={ul}>
        <li>Unbefugten Zugang zu Teilen der Website oder ihrer Infrastruktur zu versuchen</li>
        <li>Schadcode, Viren oder schädliche Daten zu übertragen</li>
        <li>Daten von der Website durch automatisierte Mittel zu scrapen oder zu sammeln</li>
        <li>Die Website zum Versenden unerwünschter Mitteilungen zu nutzen</li>
      </ul>
      <p className={p}>
        Wir behalten uns das Recht vor, den Zugang zur Website jederzeit ohne vorherige Ankündigung
        zu beschränken.
      </p>

      <h2 className={h2}>8. Gewährleistung und Haftungsbeschränkung</h2>
      <p className={p}>
        Unsere Produkte sind bei Lieferung frei von Material- und Verarbeitungsfehlern. Diese
        Gewährleistung gilt nicht für Schäden, die durch unsachgemässen Gebrauch, Nichtbefolgen der
        Sicherheitsanweisungen oder normalen Verschleiss entstanden sind.
      </p>
      <p className={p}>
        Im grösstmöglichen durch das Schweizer Recht erlaubten Umfang haftet NILIUM nicht für
        indirekte, zufällige, besondere oder Folgeschäden, die aus der Nutzung unserer Produkte oder
        Website entstehen, einschliesslich Gewinn-, Daten- oder Reputationsverlust.
      </p>
      <p className={p}>
        Nichts in diesen Bedingungen schliesst unsere Haftung für Tod oder Körperverletzung durch
        unsere Fahrlässigkeit oder für Betrug bzw. betrügerische Falschangaben aus oder beschränkt sie.
      </p>

      <h2 className={h2}>9. Kerzen-Sicherheitshinweise</h2>
      <p className={p}>
        Duftkerzen sind bei unsachgemässer Verwendung eine Brandgefahr. Durch den Kauf und die
        Verwendung unserer Kerzen bestätigen Sie, dass Sie die auf der Produktverpackung und dem
        Etikett angegebenen Sicherheitshinweise gelesen haben und befolgen werden.
      </p>
      <ul className={ul}>
        <li>Brennende Kerzen niemals unbeaufsichtigt lassen</li>
        <li>Von Kindern, Haustieren und brennbaren Materialien fernhalten</li>
        <li>Auf einer hitzebeständigen Unterlage, abseits von Zugluft, aufstellen</li>
        <li>Den Docht vor jeder Verwendung auf 5 mm kürzen</li>
        <li>Nicht länger als 4 Stunden am Stück brennen lassen</li>
        <li>Nutzung einstellen, wenn noch 10 mm Wachs verbleiben</li>
      </ul>
      <p className={p}>
        NILIUM übernimmt keine Haftung für Schäden, Verletzungen oder Verluste, die durch
        Nichtbeachtung dieser Sicherheitshinweise entstehen.
      </p>

      <h2 className={h2}>10. Datenschutz</h2>
      <p className={p}>
        Ihre personenbezogenen Daten werden gemäss unserer{' '}
        <a href="/privacy" className={a}>Datenschutzerklärung</a>{' '}
        verarbeitet, die Bestandteil dieser Nutzungsbedingungen ist. Durch die Nutzung dieser
        Website und die Aufgabe von Bestellungen stimmen Sie der Verarbeitung Ihrer Daten gemäss
        den darin beschriebenen Bedingungen zu.
      </p>

      <h2 className={h2}>11. Änderungen dieser Bedingungen</h2>
      <p className={p}>
        Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu aktualisieren.
        Änderungen werden auf dieser Seite mit einem aktualisierten Datum veröffentlicht. Die
        fortgesetzte Nutzung der Website nach Änderungen gilt als Akzeptanz der neuen Bedingungen.
        Wir empfehlen Ihnen, diese Seite regelmässig zu überprüfen.
      </p>

      <h2 className={h2}>12. Geltendes Recht und Gerichtsstand</h2>
      <p className={p}>
        Diese Nutzungsbedingungen unterliegen ausschliesslich schweizerischem Recht unter Ausschluss
        kollisionsrechtlicher Regeln und internationaler Abkommen. Ausschliesslicher Gerichtsstand
        für alle Streitigkeiten, die sich aus oder im Zusammenhang mit diesen Bedingungen ergeben,
        ist Bern, Schweiz, vorbehaltlich zwingender Bestimmungen des Konsumentenschutzrechts.
      </p>

      <h2 className={h2}>13. Kontakt</h2>
      <p className={p}>
        Bei Fragen zu diesen Nutzungsbedingungen wenden Sie sich bitte an:
      </p>
      <p className={p}>
        Nilium<br />
        Bodenackerweg 4<br />
        3053 Bern<br />
        Schweiz<br />
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
      </p>
    </>
  );
}

function TermsFR() {
  return (
    <>
      <h2 className={h2}>1. À propos de nous</h2>
      <p className={p}>
        Les présentes Conditions d'utilisation régissent votre utilisation du site web NILIUM ainsi
        que l'achat des produits qui y sont proposés. NILIUM est une entreprise individuelle
        (Einzelfirma) enregistrée en Suisse :
      </p>
      <p className={p}>
        Nilium<br />
        Bodenackerweg 4<br />
        3053 Berne<br />
        Suisse<br />
        E-mail :{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
      </p>
      <p className={p}>
        En accédant à notre site web ou en passant une commande, vous acceptez d'être lié par les
        présentes Conditions. Veuillez les lire attentivement avant de procéder.
      </p>

      <h2 className={h2}>2. Produits</h2>
      <p className={p}>
        Tous les produits proposés sur ce site sont des articles de parfumerie d'intérieur de luxe,
        faits à la main, incluant des bougies parfumées, des sachets odorants et des coffrets cadeaux.
        Nous veillons à décrire nos produits avec précision ; toutefois, de légères variations de
        couleur peuvent survenir en raison des paramètres d'affichage et des caractéristiques
        naturelles des articles artisanaux.
      </p>
      <p className={p}>
        Nos bougies sont fabriquées avec 100 % de cire de soja naturelle, des huiles parfumées de
        qualité supérieure et des mèches en coton. Les ingrédients sont indiqués sur chaque page
        produit. Si vous êtes sensible à certains composants odorants, veuillez consulter la liste
        des ingrédients avant d'acheter.
      </p>

      <h2 className={h2}>3. Commandes et paiement</h2>
      <p className={p}>
        En soumettant une commande, vous formulez une offre d'achat ferme pour les produits
        sélectionnés. Nous nous réservons le droit de refuser ou d'annuler toute commande à notre
        discrétion, notamment en cas d'erreur de prix ou d'indisponibilité.
      </p>
      <p className={p}>
        Un contrat de vente est conclu lorsque nous vous envoyons une confirmation de commande par
        e-mail. Les moyens de paiement acceptés sont Visa, Mastercard, PayPal, TWINT et PostFinance.
        Tous les prix sont affichés en francs suisses (CHF) et incluent la TVA suisse applicable.
      </p>

      <h2 className={h2}>4. Livraison</h2>
      <p className={p}>
        Nous livrons en Suisse et dans certaines destinations internationales sélectionnées. La
        livraison standard en Suisse prend 3 à 5 jours ouvrables. Les délais de livraison
        internationale varient selon la destination. Les frais de livraison sont calculés au moment
        du paiement et sont à la charge du client, sauf si le seuil de livraison gratuite est atteint.
      </p>
      <p className={p}>
        Nous ne sommes pas responsables des retards causés par les douanes, les services postaux ou
        des événements indépendants de notre volonté. Le risque de perte est transféré à l'acheteur
        lors de la remise au transporteur.
      </p>

      <h2 className={h2}>5. Retours et remboursements</h2>
      <p className={p}>
        Vous disposez du droit de vous rétracter de votre achat dans un délai de 14 jours suivant la
        réception de votre commande, sans avoir à motiver votre décision, conformément au droit suisse
        de la consommation. Pour exercer ce droit, veuillez nous contacter à l'adresse{' '}
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>{' '}
        avant de retourner l'article.
      </p>
      <p className={p}>
        Les produits doivent être retournés dans leur état d'origine, non utilisés, et dans leur
        emballage d'origine. Les frais de retour sont à la charge du client, sauf si l'article est
        défectueux ou livré incorrectement. Les remboursements seront traités dans les 14 jours
        suivant la réception des marchandises retournées, en utilisant le mode de paiement d'origine.
      </p>
      <p className={p}>
        Pour des raisons d'hygiène, les sachets ouverts et les bougies ayant été allumées sont exclus
        du droit de retour, sauf s'ils sont défectueux.
      </p>

      <h2 className={h2}>6. Propriété intellectuelle</h2>
      <p className={p}>
        Tous les contenus de ce site web — incluant, sans s'y limiter, les textes, images,
        photographies, le nom NILIUM, le logo et l'identité de marque — sont la propriété exclusive
        de Nilium ou de ses concédants de licence et sont protégés par le droit d'auteur suisse et
        international.
      </p>
      <p className={p}>
        Vous ne pouvez pas reproduire, distribuer, modifier, afficher ou utiliser tout contenu de
        ce site à des fins commerciales sans le consentement écrit préalable de NILIUM. L'utilisation
        personnelle et non commerciale est autorisée à condition que toutes les mentions de droits
        d'auteur restent intactes.
      </p>

      <h2 className={h2}>7. Utilisation du site web</h2>
      <p className={p}>
        Vous vous engagez à utiliser ce site web uniquement à des fins légales et d'une manière qui
        ne porte pas atteinte aux droits d'autrui. Il vous est interdit de :
      </p>
      <ul className={ul}>
        <li>Tenter d'accéder sans autorisation à toute partie du site ou de son infrastructure</li>
        <li>Transmettre des codes malveillants, des virus ou des données nuisibles</li>
        <li>Extraire ou collecter des données du site par des moyens automatisés</li>
        <li>Utiliser le site pour envoyer des communications non sollicitées</li>
      </ul>
      <p className={p}>
        Nous nous réservons le droit de restreindre l'accès au site à tout moment sans préavis.
      </p>

      <h2 className={h2}>8. Garanties et limitation de responsabilité</h2>
      <p className={p}>
        Nos produits sont garantis exempts de défauts de matériaux et de fabrication au moment de
        la livraison. Cette garantie ne couvre pas les dommages causés par une utilisation
        inappropriée, le non-respect des consignes de sécurité, ou l'usure normale.
      </p>
      <p className={p}>
        Dans toute la mesure permise par le droit suisse, NILIUM ne sera pas responsable des dommages
        indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation de nos produits
        ou de notre site web, y compris la perte de bénéfices, de données ou de réputation.
      </p>
      <p className={p}>
        Rien dans les présentes Conditions n'exclut ni ne limite notre responsabilité en cas de décès
        ou de préjudice corporel causé par notre négligence, ou en cas de fraude ou de déclaration
        frauduleuse.
      </p>

      <h2 className={h2}>9. Sécurité des bougies</h2>
      <p className={p}>
        Les bougies parfumées constituent un risque d'incendie si elles sont utilisées de manière
        inappropriée. En achetant et en utilisant nos bougies, vous reconnaissez avoir lu et
        respecterez les consignes de sécurité figurant sur l'emballage et l'étiquette du produit.
      </p>
      <ul className={ul}>
        <li>Ne jamais laisser une bougie allumée sans surveillance</li>
        <li>Tenir hors de la portée des enfants, des animaux et des matières inflammables</li>
        <li>Placer sur une surface résistante à la chaleur, à l'abri des courants d'air</li>
        <li>Couper la mèche à 5 mm avant chaque utilisation</li>
        <li>Ne pas brûler plus de 4 heures consécutives</li>
        <li>Cesser l'utilisation lorsqu'il reste 10 mm de cire</li>
      </ul>
      <p className={p}>
        NILIUM décline toute responsabilité pour les dommages, blessures ou pertes résultant du
        non-respect de ces consignes de sécurité.
      </p>

      <h2 className={h2}>10. Confidentialité</h2>
      <p className={p}>
        Vos données personnelles sont traitées conformément à notre{' '}
        <a href="/privacy" className={a}>Politique de confidentialité</a>,
        qui fait partie intégrante des présentes Conditions. En utilisant ce site et en passant des
        commandes, vous consentez au traitement de vos données tel que décrit dans celle-ci.
      </p>

      <h2 className={h2}>11. Modifications des présentes Conditions</h2>
      <p className={p}>
        Nous nous réservons le droit de mettre à jour les présentes Conditions d'utilisation à tout
        moment. Les modifications seront publiées sur cette page avec une date révisée. La poursuite
        de l'utilisation du site après toute modification vaut acceptation des nouvelles Conditions.
        Nous vous encourageons à consulter cette page régulièrement.
      </p>

      <h2 className={h2}>12. Droit applicable et juridiction compétente</h2>
      <p className={p}>
        Les présentes Conditions sont régies exclusivement par le droit suisse, à l'exclusion des
        règles de conflit de lois et des traités internationaux. Le for exclusif pour tout litige
        découlant des présentes Conditions ou en lien avec celles-ci est Berne, Suisse, sous réserve
        des dispositions impératives du droit de la consommation.
      </p>

      <h2 className={h2}>13. Contact</h2>
      <p className={p}>
        Pour toute question relative aux présentes Conditions, veuillez nous contacter à :
      </p>
      <p className={p}>
        Nilium<br />
        Bodenackerweg 4<br />
        3053 Berne<br />
        Suisse<br />
        <a href="mailto:nilium.official@gmail.com" className={a}>
          nilium.official@gmail.com
        </a>
      </p>
    </>
  );
}

export const TermsOfService: React.FC<{ lang: Language }> = ({ lang: initialLang }) => {
  const [lang, setLang] = useState<Language>(initialLang ?? detectLanguage());

  const handleLangChange = (l: Language) => {
    setLang(l);
    localStorage.setItem('nilium-lang', l);
  };

  return (
    <LegalPageLayout
      title={{ en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: "Conditions d'utilisation" }}
      lastUpdated={{ en: 'May 13, 2026', de: '13. Mai 2026', fr: '13 mai 2026' }}
      lang={lang}
      onLangChange={handleLangChange}
    >
      {lang === 'de' ? <TermsDE /> : lang === 'fr' ? <TermsFR /> : <TermsEN />}
    </LegalPageLayout>
  );
};
