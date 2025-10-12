export default function TestPage() {
  return (
    <div className="space-y-4 p-8">
      <h1 className="text-2xl font-bold">Brand Colors Test</h1>

      <div className="space-y-4">
        <div className="bg-brand-primary rounded p-4 text-white">
          Coffee Brown (brand-primary): #8B4513
        </div>
        <div className="bg-brand-secondary rounded p-4 text-white">
          Matcha Green (brand-secondary): #7CB342
        </div>
        <div className="bg-brand-warm text-brand-primary rounded p-4">
          Warm Cream (brand-warm): #F5F5DC
        </div>
        <div className="bg-brand-primary-dark rounded p-4 text-white">
          Dark Coffee (brand-primary-dark): #6B3410
        </div>
        <div className="bg-brand-success-dark rounded p-4 text-white">
          Dark Matcha (brand-success-dark): #5A8A2E
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-2 text-xl font-bold">Gradients Test</h2>
        <div className="from-brand-primary to-brand-primary-dark rounded bg-gradient-to-r p-4 text-white">
          Coffee Gradient
        </div>
        <div className="from-brand-secondary to-brand-success-dark mt-2 rounded bg-gradient-to-r p-4 text-white">
          Matcha Gradient
        </div>
      </div>
    </div>
  );
}
