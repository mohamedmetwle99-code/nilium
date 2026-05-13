export interface Article {
  slug: string;
  title: { en: string; de: string; fr: string };
  excerpt: { en: string; de: string; fr: string };
  body: { en: string; de: string; fr: string };
  date: string;
  readingTime: number;
  coverImage: string;
  category: { en: string; de: string; fr: string };
}

export const articles: Article[] = [
  {
    slug: 'the-slow-art-of-lighting',
    title: {
      en: 'The Slow Art of Lighting a Candle',
      de: 'Die langsame Kunst, eine Kerze anzuzünden',
      fr: 'L\'Art Lent d\'Allumer une Bougie',
    },
    excerpt: {
      en: 'In a world that rushes, the act of lighting a candle is a small rebellion.',
      de: 'In einer eiligen Welt ist das Anzünden einer Kerze eine kleine Rebellion.',
      fr: 'Dans un monde qui se précipite, l\'acte d\'allumer une bougie est une petite rébellion.',
    },
    body: {
      en: 'Most of us light candles without thinking. A flick of the wrist, a match struck, a wick caught. But there is another way.\n\nBegin by holding the candle. Feel the cool weight of the glass, the smoothness of the wax surface still untouched. Notice the wick — its small, deliberate stillness before flame.\n\nWhen you strike the match, do not rush to the wick. Watch the flame for a breath. Let it become familiar. Then lower it slowly, and let the wick take what it needs.\n\nFor a NILIUM candle, the first burn matters. Allow the wax to melt fully to the edges before extinguishing — typically two to three hours. This is called "memory burn," and it determines how your candle will burn for the rest of its life.\n\nA ritual is not what you do. It is how you do it.',
      de: 'Die meisten von uns zünden Kerzen an, ohne darüber nachzudenken. Eine Handbewegung, ein angerissenes Streichholz, ein gefangener Docht. Aber es gibt einen anderen Weg.\n\nBeginnen Sie damit, die Kerze zu halten. Spüren Sie das kühle Gewicht des Glases, die Glätte der noch unberührten Wachsoberfläche. Beachten Sie den Docht — seine kleine, bewusste Stille vor der Flamme.\n\nWenn Sie das Streichholz anzünden, eilen Sie nicht zum Docht. Beobachten Sie die Flamme für einen Atemzug. Lassen Sie sie vertraut werden. Senken Sie sie dann langsam und lassen Sie den Docht nehmen, was er braucht.\n\nFür eine NILIUM-Kerze ist der erste Brand wichtig. Lassen Sie das Wachs vollständig bis zu den Rändern schmelzen, bevor Sie es löschen — typischerweise zwei bis drei Stunden. Dies wird "Erinnerungsbrand" genannt und bestimmt, wie Ihre Kerze für den Rest ihres Lebens brennen wird.\n\nEin Ritual ist nicht, was Sie tun. Es ist, wie Sie es tun.',
      fr: 'La plupart d\'entre nous allument des bougies sans réfléchir. Un mouvement du poignet, une allumette frottée, une mèche qui prend feu. Mais il existe une autre voie.\n\nCommencez par tenir la bougie. Sentez le poids frais du verre, la douceur de la surface de cire encore intacte. Remarquez la mèche — son immobilité petite et délibérée avant la flamme.\n\nQuand vous frottez l\'allumette, ne vous précipitez pas vers la mèche. Observez la flamme le temps d\'un souffle. Laissez-la devenir familière. Puis abaissez-la lentement, et laissez la mèche prendre ce dont elle a besoin.\n\nPour une bougie NILIUM, la première combustion est importante. Laissez la cire fondre complètement jusqu\'aux bords avant d\'éteindre — généralement deux à trois heures. Cela s\'appelle la « combustion mémoire », et cela détermine comment votre bougie brûlera pour le reste de sa vie.\n\nUn rituel n\'est pas ce que vous faites. C\'est comment vous le faites.',
    },
    date: '2026-05-01',
    readingTime: 3,
    coverImage: '/images/journal/lighting.jpg',
    category: { en: 'Ritual', de: 'Ritual', fr: 'Rituel' },
  },
  {
    slug: 'where-nile-meets-alps',
    title: {
      en: 'Where the Nile Meets the Alps',
      de: 'Wo der Nil auf die Alpen trifft',
      fr: 'Là où le Nil Rencontre les Alpes',
    },
    excerpt: {
      en: 'Two ancient civilizations. Two opposite landscapes. One candle that holds both.',
      de: 'Zwei alte Zivilisationen. Zwei gegensätzliche Landschaften. Eine Kerze, die beide hält.',
      fr: 'Deux civilisations anciennes. Deux paysages opposés. Une bougie qui contient les deux.',
    },
    body: {
      en: 'NILIUM was not born from a market opportunity. It was born from contradiction.\n\nThere is the Nile — slow, warm, alive with the perfume of papyrus and lotus and the heat of ancient stone. Civilizations grew along its banks because the water gave them everything: ritual, food, story.\n\nAnd then there are the Alps. Cold, clear, impossibly quiet. The opposite of the Nile in every way. Where the Nile invites the senses to bloom, the Alps invite them to settle.\n\nMost luxury brands choose one world. NILIUM holds both.\n\nWe believe a beautiful life is not made of one feeling. It is made of contrast. The warm bath and the cold morning. The candlelit dinner and the snow-covered hike. The whispered ritual and the silent peak.\n\nOur candles are crafted in Switzerland with the discipline the Swiss are known for. Yet every fragrance carries an echo of older worlds — places where time moved slower, and beauty was made by hand.\n\nWhere the Nile meets the Alps, something new is born.',
      de: 'NILIUM wurde nicht aus einer Marktchance geboren. Es wurde aus Widerspruch geboren.\n\nDa ist der Nil — langsam, warm, lebendig mit dem Duft von Papyrus und Lotus und der Hitze des antiken Steins. Zivilisationen wuchsen an seinen Ufern, weil das Wasser ihnen alles gab: Rituale, Nahrung, Geschichte.\n\nUnd dann sind da die Alpen. Kalt, klar, unmöglich still. Das Gegenteil des Nils in jeder Hinsicht. Wo der Nil die Sinne zum Erblühen einlädt, lädt die Alpen sie zur Ruhe ein.\n\nDie meisten Luxusmarken wählen eine Welt. NILIUM hält beide.\n\nWir glauben, ein schönes Leben besteht nicht aus einem Gefühl. Es besteht aus Kontrast. Das warme Bad und der kalte Morgen. Das Kerzenlicht-Abendessen und die schneebedeckte Wanderung. Das geflüsterte Ritual und der stille Gipfel.\n\nUnsere Kerzen werden in der Schweiz mit der Disziplin gefertigt, für die die Schweizer bekannt sind. Doch jeder Duft trägt ein Echo älterer Welten — Orte, an denen die Zeit langsamer verging und Schönheit von Hand gemacht wurde.\n\nWo der Nil auf die Alpen trifft, wird etwas Neues geboren.',
      fr: 'NILIUM n\'est pas né d\'une opportunité de marché. Il est né d\'une contradiction.\n\nIl y a le Nil — lent, chaud, vivant du parfum de papyrus et de lotus et de la chaleur de la pierre ancienne. Les civilisations ont grandi sur ses rives parce que l\'eau leur donnait tout : rituel, nourriture, histoire.\n\nEt puis il y a les Alpes. Froides, claires, impossiblement silencieuses. L\'opposé du Nil à tous égards. Là où le Nil invite les sens à éclore, les Alpes les invitent à se poser.\n\nLa plupart des marques de luxe choisissent un seul monde. NILIUM les contient tous les deux.\n\nNous croyons qu\'une belle vie n\'est pas faite d\'un seul sentiment. Elle est faite de contraste. Le bain chaud et le matin froid. Le dîner aux chandelles et la randonnée enneigée. Le rituel chuchoté et le sommet silencieux.\n\nNos bougies sont fabriquées en Suisse avec la discipline dont les Suisses sont connus. Pourtant, chaque parfum porte un écho de mondes plus anciens — des lieux où le temps s\'écoulait plus lentement, et où la beauté était faite à la main.\n\nLà où le Nil rencontre les Alpes, quelque chose de nouveau naît.',
    },
    date: '2026-04-15',
    readingTime: 4,
    coverImage: '/images/journal/nile-alps.jpg',
    category: { en: 'Philosophy', de: 'Philosophie', fr: 'Philosophie' },
  },
  {
    slug: 'notes-from-the-atelier',
    title: {
      en: 'Notes from the Atelier: How Nile Secrets Came to Be',
      de: 'Notizen aus dem Atelier: Wie Nile Secrets entstand',
      fr: 'Notes de l\'Atelier : Comment Secrets du Nil est Né',
    },
    excerpt: {
      en: 'The first version had too much sandalwood. The eighth was almost right.',
      de: 'Die erste Version hatte zu viel Sandelholz. Die achte war fast richtig.',
      fr: 'La première version avait trop de bois de santal. La huitième était presque parfaite.',
    },
    body: {
      en: 'Crafting a scent is not science. It is listening.\n\nWhen we began work on Nile Secrets, we knew what feeling we wanted: the sun-warmed stone of an ancient temple at the edge of the river. The smoke of incense drifting through a doorway. The slow heat of late afternoon.\n\nBut feelings cannot be measured. So we began with what we had — papyrus, lotus, sandalwood, amber. Materials that have moved through human hands for four thousand years.\n\nThe first version had too much sandalwood. It felt heavy, like a temple closed against the world.\n\nThe second had too much amber. It felt sweet, almost dessert-like — far from what we sought.\n\nWe kept adjusting. Less of this. More of that. A trace of black pepper to add tension. A hint of green leaf to brighten the dry warmth.\n\nThe eighth version was almost right. The eleventh was right.\n\nThis is how NILIUM candles are made. Slowly. By feeling. Until the scent stops asking for adjustments and simply rests in the air.\n\nWhen you light Nile Secrets, you are not lighting a product. You are lighting a year of listening.',
      de: 'Einen Duft zu kreieren ist keine Wissenschaft. Es ist Zuhören.\n\nAls wir mit der Arbeit an Nile Secrets begannen, wussten wir, welches Gefühl wir wollten: den sonnenwarmen Stein eines antiken Tempels am Flussufer. Den Rauch von Räucherwerk, der durch eine Tür treibt. Die langsame Hitze des späten Nachmittags.\n\nAber Gefühle können nicht gemessen werden. Also begannen wir mit dem, was wir hatten — Papyrus, Lotus, Sandelholz, Amber. Materialien, die seit viertausend Jahren durch menschliche Hände gegangen sind.\n\nDie erste Version hatte zu viel Sandelholz. Sie fühlte sich schwer an, wie ein Tempel, der gegen die Welt geschlossen ist.\n\nDie zweite hatte zu viel Amber. Sie fühlte sich süß an, fast wie ein Dessert — weit entfernt von dem, was wir suchten.\n\nWir passten weiter an. Weniger davon. Mehr davon. Eine Spur schwarzer Pfeffer, um Spannung hinzuzufügen. Ein Hauch grünes Blatt, um die trockene Wärme aufzuhellen.\n\nDie achte Version war fast richtig. Die elfte war richtig.\n\nSo werden NILIUM-Kerzen hergestellt. Langsam. Durch Gefühl. Bis der Duft aufhört, nach Anpassungen zu fragen und einfach in der Luft ruht.\n\nWenn Sie Nile Secrets anzünden, zünden Sie kein Produkt an. Sie zünden ein Jahr des Zuhörens an.',
      fr: 'Créer un parfum n\'est pas une science. C\'est de l\'écoute.\n\nQuand nous avons commencé à travailler sur Secrets du Nil, nous savions quelle émotion nous voulions : la pierre tiédie par le soleil d\'un temple ancien au bord du fleuve. La fumée d\'encens dérivant à travers une porte. La chaleur lente d\'une fin d\'après-midi.\n\nMais les émotions ne peuvent pas être mesurées. Alors nous avons commencé avec ce que nous avions — papyrus, lotus, bois de santal, ambre. Des matériaux qui sont passés par les mains humaines depuis quatre mille ans.\n\nLa première version avait trop de bois de santal. Elle se sentait lourde, comme un temple fermé contre le monde.\n\nLa deuxième avait trop d\'ambre. Elle se sentait sucrée, presque comme un dessert — loin de ce que nous cherchions.\n\nNous avons continué à ajuster. Moins de ceci. Plus de cela. Une trace de poivre noir pour ajouter de la tension. Une touche de feuille verte pour égayer la chaleur sèche.\n\nLa huitième version était presque parfaite. La onzième était parfaite.\n\nC\'est ainsi que sont faites les bougies NILIUM. Lentement. Par sensation. Jusqu\'à ce que le parfum cesse de demander des ajustements et repose simplement dans l\'air.\n\nQuand vous allumez Secrets du Nil, vous n\'allumez pas un produit. Vous allumez une année d\'écoute.',
    },
    date: '2026-04-01',
    readingTime: 4,
    coverImage: '/images/journal/atelier.jpg',
    category: { en: 'Atelier Notes', de: 'Atelier-Notizen', fr: 'Notes d\'Atelier' },
  },
];
