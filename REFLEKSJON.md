# Refleksjon – Video Poker

## Arbeidsprosess

Jeg jobbet med prosjektet steg for steg og delte arbeidet opp i mindre deler. Jeg startet med React-oppsett og routing mellom Game, Players og Rules. Etterpå laget jeg typer, komponenter og spillfunksjonalitet.

Jeg brukte Git og GitHub gjennom prosjektet og jobbet med forskjellige feature branches. Når en del var ferdig, pushet jeg branchen og merget den inn i main med pull request.

## Hva jeg lærte

Jeg lærte mye om React, TypeScript og Zustand i dette prosjektet. Før prosjektet syntes jeg det var vanskelig å forstå hvordan state fungerer og hvor data skal lagres.

Jeg brukte Zustand til spilldata som spillere, aktiv spiller, kortstokk, hånd og coins. For input-feltet på Players-siden brukte jeg lokal `useState`, fordi denne verdien bare brukes i denne komponenten.

Jeg lærte også hvordan `persist` kan brukes sammen med Zustand for å lagre state i localStorage. Derfor forsvinner ikke spilldata når siden lastes på nytt.

Pokerlogikken var en av de vanskeligste delene for meg fordi jeg ikke kjente pokerreglene så godt fra før. Jeg måtte først forstå reglene og deretter finne ut hvordan jeg kunne lage dem med TypeScript. Jeg jobbet blant annet med arrays, `map`, `filter`, `every` og telling av kortverdier.

## Feil og problemer

Jeg gjorde flere små feil underveis. Noen ganger manglet jeg komma, kolon eller parenteser, og noen ganger skrev jeg feil variabelnavn.

En feil jeg husker godt var da jeg skrev `iimport` i stedet for `import`. Det førte til mange feilmeldinger selv om problemet egentlig bare var én liten skrivefeil. Jeg lærte derfor at det er lurt å starte med den første feilmeldingen i stedet for å prøve å løse alle feilene samtidig.

Jeg brukte Vite, TypeScript, ESLint og Developer Tools for å finne og rette feil.

## Valg jeg gjorde

Jeg valgte å lage én `Card`-komponent som kan vise både forsiden og baksiden med `faceDown`, i stedet for å lage to nesten like komponenter.

Jeg delte også spillet opp i mindre komponenter som `Card`, `TotalCoins`, `CurrentBet` og `PayoutTable`. Det gjorde koden lettere for meg å forstå.

Til slutt jobbet jeg med responsivt design og testet spillet på forskjellige skjermstørrelser. Jeg justerte blant annet kortstørrelser og spacing slik at alle fem kortene fortsatt vises på små skjermer.

## Til slutt

Dette prosjektet var utfordrende, spesielt Zustand og pokerlogikken, men jeg forstår React-prosjekter bedre nå enn da jeg startet. Jeg har også blitt mer komfortabel med Git, debugging og å dele et større problem opp i mindre oppgaver.