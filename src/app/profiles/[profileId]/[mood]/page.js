async function Mood({ params }) {
  const resolvedParams = await params;
  return JSON.stringify(resolvedParams);
}

export default Mood;
