
## 1. Interface voor Props

Hier definieer je een interface genaamd ComicPreviewProps, die beschrijft welke props dit component verwacht.

```
interface ComicPreviewProps {
  comic: Comic;
  backgroundColor: string;
  dropShadow: string;
  message: string;
  textColor: string;
}
```

### Props:
- comic: Dit is een object van het type Comic dat de gegevens van de comic bevat (zoals de titel en de afbeelding).
- backgroundColor: Dit is de achtergrondkleur van de comic preview.
- dropShadow: Dit bepaalt de schaduw die rond de preview wordt weergegeven.
- message: Een optioneel bericht dat door de gebruiker kan worden toegevoegd.
textColor: De kleur van de tekst (titel en bericht).


## 2. De ComicPreview Functional Component

```
const ComicPreview: React.FC<ComicPreviewProps> = ({
  comic,
  backgroundColor,
  dropShadow,
  message,
  textColor,
}) => {

```
- Component Definities:
    - ComicPreview is een functionele component in React.
    - Het component accepteert props van het type ComicPreviewProps, wat helpt bij het typeveilig maken van de props die doorgegeven worden aan het component.
    - Hier destructureer je de props direct in de functionele parameters om gemakkelijker toegang te krijgen tot hun waarden.


## 3. Renderen van het component
Het ComicPreview component rendert een div die de comic preview weergeeft, inclusief de titel, afbeelding en een optioneel bericht.

```
return (
  <div
    className={styles.ComicPreview}
    style={{ backgroundColor, boxShadow: dropShadow }}
  >
    <img
      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
      alt={comic.title}
      className={styles.thumbnail}
    />
    <h2 style={{ color: textColor }}>{comic.title}</h2>
    {message && <p style={{ color: textColor }}>{message}</p>}
  </div>
);
``` 

### Wat gebeurt er hier?
- `<div>` met dynamische styling:

    - Het div element heeft de className styles.ComicPreview, die de CSS-styles voor dit component toepast vanuit het CSS-module bestand.

    - Daarnaast wordt de style-prop gebruikt om dynamisch de backgroundColor en dropShadow toe te voegen, die afkomstig zijn van de props.

- Afbeelding van de comic:

    ```
    <img
    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
    alt={comic.title}
    className={styles.thumbnail}
    />
    ```

- De src-prop van de <img> gebruikt de path en extension van de thumbnail van de comic om de juiste afbeelding weer te geven.
  - Example: Als comic.thumbnail.path http://example.com/image is en comic.thumbnail.extension jpg, dan wordt de volledige URL voor de afbeelding http://example.com/image.jpg.

- alt-attribuut: Dit beschrijft de afbeelding, in dit geval de title van de comic, voor toegankelijkheid.

- className: De CSS-module klasse styles.thumbnail wordt gebruikt om de afbeelding te stylen.

### Titel van de comic:


`<h2 style={{ color: textColor }}>{comic.title}</h2>`

- De titel van de comic wordt weergegeven in een `<h2>` element.
- De kleur van de titel wordt ingesteld op basis van de `textColor` prop.

- #### Optioneel bericht:

    `{message && <p style={{ color: textColor }}>{message}</p>}`

- Het bericht wordt alleen weergegeven als er een     bericht is doorgegeven via de message prop.

- De tekstkleur van het bericht wordt ook ingesteld op basis van de textColor prop.

- Het gebruik van `{message && ...}` is een eenvoudige manier om een conditie toe te voegen in JSX. Als `message` een waarheidachtige waarde heeft, wordt het bericht weergegeven. Als `message` leeg of `null` is, wordt er niets gerenderd.