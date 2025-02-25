"use client";

export default function FeaturedWork() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Work</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="aspect-video bg-gray-100 dark:bg-gray-700" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Brief description of the project and the technologies used.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}