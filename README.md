# Limbvoid Games

This is the portfolio website of LimbvoidGames. 
You can check the website at:-
 https://akshatpuri.github.io/LimbvoidGames/

## Adding Project Cards

Use the local helper script to add future work without hand-editing the card markup:

```powershell
python tools/add_project_card.py `
  --title "My New Game" `
  --image "screenshots/my-new-game.png" `
  --role "Gameplay prototype with custom tools." `
  --tags "C#,Unity" `
  --link "https://limbvoid.itch.io/my-new-game" `
  --link-title "Itch.io" `
  --icon "fab fa-itch-io"
```

Add an empty dry-run card to the site so you can test the layout visually:

```powershell
python tools/add_project_card.py --dry-run
```

Remove the dry-run card after checking:

```powershell
python tools/add_project_card.py --remove-dry-run
```

Print the generated card markup without editing files:

```powershell
python tools/add_project_card.py --print-only --title "My Tool" --image "https://example.com/screenshot.png" --role "Editor utility." --tags "Godot,Tool" --link "https://example.com"
```

The script can copy a local image into `img/`, download an image URL into `img/`, add tags, add links, and mark a card as `--featured` or `--wip`.