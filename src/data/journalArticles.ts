export interface Article {
  slug: string;
  title: { en: string; de: string };
  excerpt: { en: string; de: string };
  body: { en: string; de: string };
  date: string;
  readingTime: number;
  coverImage: string;
  category: { en: string; de: string };
}

export const articles: Article[] = [
  {
    slug: 'the-slow-art-of-lighting',
    title: {
      en: 'The Slow Art of Lighting a Candle',
      de: 'Die langsame Kunst, eine Kerze anzuzünden',
    },
    excerpt: {
      en: 'In a world that rushes, the act of lighting a candle is a small rebellion.',
      de: 'In einer eiligen Welt ist das Anzünden einer Kerze eine kleine Rebellion.',
    },
    body: {
      en: 'Most of us light candles without thinking. A flick of the wrist, a match struck, a wick caught. But there is another way.\n\nBegin by holding the candle. Feel the cool weight of the glass, the smoothness of the wax surface still untouched. Notice the wick — its small, deliberate stillness before flame.\n\nWhen you strike the match, do not rush to the wick. Watch the flame for a breath. Let it become familiar. Then lower it slowly, and let the wick take what it needs.\n\nFor a NILIUM candle, the first burn matters. Allow the wax to melt fully to the edges before extinguishing — typically two to three hours. This is called "memory burn," and it determines how your candle will burn for the rest of its life.\n\nA ritual is not what you do. It is how you do it.',
      de: 'Die meisten von uns zünden Kerzen an, ohne darüber nachzudenken. Eine Handbewegung, ein angerissenes Streichholz, ein gefangener Docht. Aber es gibt einen anderen Weg.\n\nBeginnen Sie damit, die Kerze zu halten. Spüren Sie das kühle Gewicht des Glases, die Glätte der noch unberührten Wachsoberfläche. Beachten Sie den Docht — seine kleine, bewusste Stille vor der Flamme.\n\nWenn Sie das Streichholz anzünden, eilen Sie nicht zum Docht. Beobachten Sie die Flamme für einen Atemzug. Lassen Sie sie vertraut werden. Senken Sie sie dann langsam und lassen Sie den Docht nehmen, was er braucht.\n\nFür eine NILIUM-Kerze ist der erste Brand wichtig. Lassen Sie das Wachs vollständig bis zu den Rändern schmelzen, bevor Sie es löschen — typischerweise zwei bis drei Stunden. Dies wird "Erinnerungsbrand" genannt und bestimmt, wie Ihre Kerze für den Rest ihres Lebens brennen wird.\n\nEin Ritual ist nicht, was Sie tun. Es ist, wie Sie es tun.',
    },
    date: '2026-05-01',
    readingTime: 3,
    coverImage: '/images/journal/lighting.jpg',
    category: { en: 'Ritual', de: 'Ritual' },
  },
  {
    slug: 'where-nile-meets-alps',
    title: {
      en: 'Where the Nile Meets the Alps',
      de: 'Wo der Nil auf die Alpen trifft',
    },
    excerpt: {
      en: 'Two ancient civilizations. Two opposite landscapes. One candle that holds both.',
      de: 'Zwei alte Zivilisationen. Zwei gegensätzliche Landschaften. Eine Kerze, die beide hält.',
    },
    body: {
      en: 'NILIUM was not born from a market opportunity. It was born from contradiction.\n\nThere is the Nile — slow, warm, alive with the perfume of papyrus and lotus and the heat of ancient stone. Civilizations grew along its banks because the water gave them everything: ritual, food, story.\n\nAnd then there are the Alps. Cold, clear, impossibly quiet. The opposite of the Nile in every way. Where the Nile invites the senses to bloom, the Alps invite them to settle.\n\nMost luxury brands choose one world. NILIUM holds both.\n\nWe believe a beautiful life is not made of one feeling. It is made of contrast. The warm bath and the cold morning. The candlelit dinner and the snow-covered hike. The whispered ritual and the silent peak.\n\nOur candles are crafted in Switzerland with the discipline the Swiss are known for. Yet every fragrance carries an echo of older worlds — places where time moved slower, and beauty was made by hand.\n\nWhere the Nile meets the Alps, something new is born.',
      de: 'NILIUM wurde nicht aus einer Marktchance geboren. Es wurde aus Widerspruch geboren.\n\nDa ist der Nil — langsam, warm, lebendig mit dem Duft von Papyrus und Lotus und der Hitze des antiken Steins. Zivilisationen wuchsen an seinen Ufern, weil das Wasser ihnen alles gab: Rituale, Nahrung, Geschichte.\n\nUnd dann sind da die Alpen. Kalt, klar, unmöglich still. Das Gegenteil des Nils in jeder Hinsicht. Wo der Nil die Sinne zum Erblühen einlädt, lädt die Alpen sie zur Ruhe ein.\n\nDie meisten Luxusmarken wählen eine Welt. NILIUM hält beide.\n\nWir glauben, ein schönes Leben besteht nicht aus einem Gefühl. Es besteht aus Kontrast. Das warme Bad und der kalte Morgen. Das Kerzenlicht-Abendessen und die schneebedeckte Wanderung. Das geflüsterte Ritual und der stille Gipfel.\n\nUnsere Kerzen werden in der Schweiz mit der Disziplin gefertigt, für die die Schweizer bekannt sind. Doch jeder Duft trägt ein Echo älterer Welten — Orte, an denen die Zeit langsamer verging und Schönheit von Hand gemacht wurde.\n\nWo der Nil auf die Alpen trifft, wird etwas Neues geboren.',
    },
    date: '2026-04-15',
    readingTime: 4,
    coverImage: '/images/journal/nile-alps.jpg',
    category: { en: 'Philosophy', de: 'Philosophie' },
  },
  {
    slug: 'notes-from-the-atelier',
    title: {
      en: 'Notes from the Atelier: How Nile Secrets Came to Be',
      de: 'Notizen aus dem Atelier: Wie Nile Secrets entstand',
    },
    excerpt: {
      en: 'The first version had too much sandalwood. The eighth was almost right.',
      de: 'Die erste Version hatte zu viel Sandelholz. Die achte war fast richtig.',
    },
    body: {
      en: 'Crafting a scent is not science. It is listening.\n\nWhen we began work on Nile Secrets, we knew what feeling we wanted: the sun-warmed stone of an ancient temple at the edge of the river. The smoke of incense drifting through a doorway. The slow heat of late afternoon.\n\nBut feelings cannot be measured. So we began with what we had — papyrus, lotus, sandalwood, amber. Materials that have moved through human hands for four thousand years.\n\nThe first version had too much sandalwood. It felt heavy, like a temple closed against the world.\n\nThe second had too much amber. It felt sweet, almost dessert-like — far from what we sought.\n\nWe kept adjusting. Less of this. More of that. A trace of black pepper to add tension. A hint of green leaf to brighten the dry warmth.\n\nThe eighth version was almost right. The eleventh was right.\n\nThis is how NILIUM candles are made. Slowly. By feeling. Until the scent stops asking for adjustments and simply rests in the air.\n\nWhen you light Nile Secrets, you are not lighting a product. You are lighting a year of listening.',
      de: 'Einen Duft zu kreieren ist keine Wissenschaft. Es ist Zuhören.\n\nAls wir mit der Arbeit an Nile Secrets begannen, wussten wir, welches Gefühl wir wollten: den sonnenwarmen Stein eines antiken Tempels am Flussufer. Den Rauch von Räucherwerk, der durch eine Tür treibt. Die langsame Hitze des späten Nachmittags.\n\nAber Gefühle können nicht gemessen werden. Also begannen wir mit dem, was wir hatten — Papyrus, Lotus, Sandelholz, Amber. Materialien, die seit viertausend Jahren durch menschliche Hände gegangen sind.\n\nDie erste Version hatte zu viel Sandelholz. Sie fühlte sich schwer an, wie ein Tempel, der gegen die Welt geschlossen ist.\n\nDie zweite hatte zu viel Amber. Sie fühlte sich süß an, fast wie ein Dessert — weit entfernt von dem, was wir suchten.\n\nWir passten weiter an. Weniger davon. Mehr davon. Eine Spur schwarzer Pfeffer, um Spannung hinzuzufügen. Ein Hauch grünes Blatt, um die trockene Wärme aufzuhellen.\n\nDie achte Version war fast richtig. Die elfte war richtig.\n\nSo werden NILIUM-Kerzen hergestellt. Langsam. Durch Gefühl. Bis der Duft aufhört, nach Anpassungen zu fragen und einfach in der Luft ruht.\n\nWenn Sie Nile Secrets anzünden, zünden Sie kein Produkt an. Sie zünden ein Jahr des Zuhörens an.',
    },
    date: '2026-04-01',
    readingTime: 4,
    coverImage: '/images/journal/atelier.jpg',
    category: { en: 'Atelier Notes', de: 'Atelier-Notizen' },
  },
];
