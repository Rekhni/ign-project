export default function StoryMapPage() {
  return (
    <div style={{ width: "100%", height: "calc(100vh - 64px)" }}>
      <iframe
        title="StoryMap"
        src="https://uploads.knightlab.com/storymapjs/385f67ea3fe3a3c2e8cb4b946a500df2/geological-expeditions/index.html"
        style={{ width: "100%", height: "100%", border: 0 }}
        allowFullScreen
      />
    </div>
  );
}