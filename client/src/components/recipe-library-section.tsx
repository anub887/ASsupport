import React from "react";

export interface Recipe {
  id: string;
  title: string;
  description: string;
  url: string;
}

const RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Turmeric Ginger Salmon",
    description: "Omega‑3 rich salmon with anti-inflammatory turmeric glaze.",
    url: "https://www.eatingwell.com/recipe/279511/turmeric-ginger-salmon/"
  },
  {
    id: "2",
    title: "Quinoa & Roasted Veggie Bowl",
    description: "Fiber‑packed veggies with lemon & olive oil.",
    url: "https://www.inspiredtaste.net/15938/mediterranean-quinoa-salad-recipe/"
  },
  {
    id: "3",
    title: "Blueberry Turmeric Smoothie",
    description: "Antioxidant smoothie to calm inflammation.",
    url: "https://simplegreensmoothies.com/recipes/blueberry-turmeric-smoothie"
  }
];

export default function RecipeLibrarySection() {
  return (
    <section id="recipes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">AS‑Friendly Recipes</h2>
          <p className="text-xl text-gray-600">
            Delicious meals designed to fight inflammation.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {RECIPES.map((r) => (
            <div key={r.id} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-2">{r.title}</h3>
              <p className="text-gray-700 mb-4">{r.description}</p>
              <a
                href={r.url}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                View Recipe
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
