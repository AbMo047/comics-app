# MarvelPage

De `MarvelPage` component is een functionele React-component die de hoofdpagina van de Marvel Comic Voucher-applicatie weergeeft. Deze component maakt gebruik van diverse subcomponenten zoals `Form` en `ComicPreview` om de gebruiker in staat te stellen een comic te selecteren, aan te passen, en aan de favorieten toe te voegen. Hieronder volgt een gedetailleerde uitleg van de component en zijn props.

## Props

De `MarvelPage` component accepteert een aantal props, die de benodigde data en functies bevatten voor het selecteren en personaliseren van een comic.

```
type MarvelPageProps = {
  comics: Comic[];
  selectedComic: Comic | null;
  backgroundColor: string;
  dropShadow: string;
  textColor: string;
  message: string;
  favoriteComics: Comic[];
  handleSelectComic: (index: number) => void;
  handleAddToFavorites: (e: React.FormEvent) => void;
  handleFavoriteClick: (comic: Comic) => void;
  setBackgroundColor: (color: string) => void;
  setDropShadow: (shadow: string) => void;
  setMessage: (message: string) => void;
  setTextColor: (color: string) => void;
  successMessage: string | null;
};
```

### Beschrijving van de props:
- **comics: Comic[]**: Een array van **Comic** objecten die de lijst van beschikbare comics bevat.

- **selectedComic: Comic | null**: De comic die momenteel door de gebruiker is geselecteerd. Als er geen comic is geselecteerd, is deze **null**.

- **backgroundColor: string**: De achtergrondkleur die wordt toegepast op de comic preview.

- **dropShadow: string**: De schaduweffecten die worden toegepast op de comic preview.

- **textColor: string**: De kleur van de tekst (zoals de titel van de comic en het gepersonaliseerde bericht).

- **message: string**: Een optioneel bericht dat door de gebruiker kan worden toegevoegd aan de comic preview.

- **favoriteComics: Comic[]**: Een array van Comic objecten die de favorieten van de gebruiker bevat.

- **handleSelectComic: (index: number) => void**: Een functie die wordt aangeroepen wanneer de gebruiker een comic selecteert uit de lijst.

- **handleAddToFavorites: (e: React.FormEvent) => void**: Een functie die wordt aangeroepen om een comic aan de favorieten toe te voegen.
- **handleFavoriteClick: (comic: Comic) => void**: Een functie die wordt aangeroepen wanneer de gebruiker een favoriet selecteert.

- **setBackgroundColor: (color: string) => void**: Functie om de achtergrondkleur van de comic preview in te stellen.

- **setDropShadow: (shadow: string) => void**: Functie om het schaduweffect van de comic preview in te stellen.

- **setMessage: (message: string) => void**: Functie om het bericht dat aan de comic wordt toegevoegd in te stellen.

- **setTextColor: (color: string) => void**: Functie om de tekstkleur in te stellen.

- **successMessage: string | null**: Een optioneel succesbericht dat wordt weergegeven wanneer een comic aan de favorieten is toegevoegd.

### Layout en Structuur

De `MarvelPage` component rendert een pagina met een formulier en een preview van de geselecteerde comic. Het formulier stelt de gebruiker in staat om een comic te selecteren, de achtergrond- en tekstkleuren aan te passen, en een schaduweffect en bericht toe te voegen.

```
return (
  <div className={styles.marvelPage}>
    <div className={styles.formContainer}>
      <Form
        comics={comics}
        handleSelectComic={handleSelectComic}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        dropShadow={dropShadow}
        textColor={textColor}
        setTextColor={setTextColor}
        setDropShadow={setDropShadow}
        message={message}
        setMessage={setMessage}
        handleAddToFavorites={handleAddToFavorites}
        selectedComic={selectedComic}
      />
    </div>

    {selectedComic && (
      <div className={styles.comicPreviewContainer}>
        <ComicPreview
          comic={selectedComic}
          backgroundColor={backgroundColor}
          message={message}
          dropShadow={dropShadow}
          textColor={textColor}
        />
      </div>
    )}

    {successMessage && (
      <div className={styles.successMessage}>{successMessage}</div>
    )}
  </div>
);
```

### Layout-structuur:
- `<div className={styles.marvelPage}>`: De hoofdomslag voor de pagina, gestyled via CSS modules.

- **Form Container** (`<div className={styles.formContainer}>`): Bevat het formulier waar de gebruiker de comic kan selecteren en personaliseren.

- **Comic Preview Container** (`<div className={styles.comicPreviewContainer}>`): Toont een preview van de geselecteerde comic, inclusief alle personalisatie-opties zoals kleuren, schaduw en een gepersonaliseerd bericht.

- **Success Message** (`{successMessage && ...}`): Als er een succesbericht is, wordt dit weergegeven in een aparte container.

### Subcomponenten
### Form Component

Het formulier (`Form`) stelt de gebruiker in staat om verschillende aanpassingen aan de comic preview te maken, zoals het kiezen van een achtergrondkleur, tekstkleur en het toevoegen van een bericht.

- Props die worden doorgegeven aan Form:
    - `comics`: De lijst van beschikbare comics.

    - `handleSelectComic`: Functie voor het selecteren van een comic.

    - `backgroundColor`, `setBackgroundColor`: Props voor de achtergrondkleur.

    - `dropShadow`, `setDropShadow`: Props voor de schaduweffecten.

    - `textColor`, `setTextColor`: Props voor de tekstkleur.

    - `message`, `setMessage`: Props voor het bericht.

    - `handleAddToFavorites`: Functie voor het toevoegen aan favorieten.

    - `selectedComic`: De momenteel geselecteerde comic.

### ComicPreview Component

De `ComicPreview` component toont een preview van de geselecteerde comic, inclusief de geselecteerde kleuren en schaduwinstellingen.

- Props die worden doorgegeven aan `ComicPreview`:
    - `comic`: De momenteel geselecteerde comic.

    - `backgroundColor`: De achtergrondkleur van de comic preview.

    - `dropShadow`: Het schaduweffect rond de comic preview.

    - `textColor`: De kleur van de tekst in de preview (titel en bericht).

    - `message`: Een optioneel bericht dat door de gebruiker wordt toegevoegd.


### Succesberichten

Als een comic met succes aan de favorieten is toegevoegd, wordt er een succesbericht weergegeven aan de gebruiker.

```
{successMessage && (
  <div className={styles.successMessage}>{successMessage}</div>
)} 
```

#### Werking:
- `successMessage`: Wanneer deze prop een waarde heeft (bijvoorbeeld een bevestiging dat een comic is toegevoegd aan de favorieten), wordt het succesbericht weergegeven. De stijl hiervan wordt beheerd via de CSS-module (`styles.successMessage`).


#### Stijlen

De `MarvelPage` component maakt gebruik van CSS Modules voor styling, waardoor de stijlen lokaal zijn voor deze component en er geen conflicten optreden met andere componenten. De belangrijkste klassen zijn:

- `styles.marvelPage`: De algemene styling voor de pagina.

- `styles.formContainer`: Stijlen voor de container die het formulier bevat.

- `styles.comicPreviewContainer`: Stijlen voor de container van de comic preview.

- `styles.successMessage`: Stijlen voor het succesbericht.


### Samenvatting

De `MarvelPage` component biedt de gebruiker de mogelijkheid om een Marvel comic te selecteren, aan te passen en aan de favorieten toe te voegen. Het combineert het `Form` component voor gebruikersinvoer en de `ComicPreview` voor het visualiseren van de aanpassingen. Via de props worden verschillende functies doorgegeven om de comic aan te passen, aan de favorieten toe te voegen, en succesberichten weer te geven.
