import React from 'react';

const BookDetails = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 font-['Inter']">
      <div className="container mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8 md:p-10 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center">
          📚 The Devil Wears Prada
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://placehold.co/300x450/E0E0E0/333333?text=Book+Cover"
              alt="Book Cover"
              className="book-cover rounded-lg shadow-md w-48 h-auto sm:w-64 md:w-full max-w-xs"
            />
          </div>
          <div className="w-full md:w-2/3 text-gray-700">
            <h5 className="text-xl font-semibold mb-2">Author: Lauren Weisberger</h5>
            <p className="mb-1"><strong className="font-medium">Published:</strong> February 4, 2003</p>
            <p className="mb-1"><strong className="font-medium">ISBN:</strong> 0-7679-1476-7 | <strong className="font-medium">Pages:</strong> 360</p>
            <p className="mb-1"><strong className="font-medium">Genres:</strong> Novel, Fiction, Chick lit, Humor, Roman à clef</p>
            <p className="mb-4"><strong className="font-medium">Rating:</strong> Goodreads 3.8/5 | Common Sense 2/5 | 90% liked by Google Users</p>
            <p className="text-base leading-relaxed">
              <strong className="font-medium">Summary:</strong> The novel follows Andrea Sachs, a young woman who lands a job as assistant to a powerful fashion editor. The job becomes a nightmare as she navigates harsh demands, long hours, and a toxic work environment.
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          🎬 Movie Adaptation (2006)
        </h4>
        <p className="mb-1 text-gray-700"><strong className="font-medium">Starring:</strong> Anne Hathaway, Meryl Streep, Emily Blunt</p>
        <p className="mb-1 text-gray-700"><strong className="font-medium">Director:</strong> David Frankel</p>
        <p className="mb-4 text-gray-700"><strong className="font-medium">Rating:</strong> PG-13 | <strong className="font-medium">Runtime:</strong> 1h 46min</p>

        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li><strong className="font-medium">Sex/Nudity:</strong> 5 – Suggestive scenes, revealing clothing, casual sex.</li>
          <li><strong className="font-medium">Violence:</strong> 3 – Drunk driving, workplace stress, one injury.</li>
          <li><strong className="font-medium">Language:</strong> Moderate swearing and name-calling.</li>
          <li><strong className="font-medium">Substance Use:</strong> Alcohol use and references to drugs like crack.</li>
        </ul>

        <h5 className="text-xl font-semibold text-gray-800 mb-3">Message:</h5>
        <p className="italic text-gray-700 mb-8">
          "Giving up your principles to succeed at a job is not the way to succeed at life."
        </p>

        <div className="bg-yellow-100 p-6 rounded-lg shadow-inner mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">👪 Parental Guidance</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong className="font-medium">Age Rating:</strong> 15+</li>
            <li><strong className="font-medium">Positive Messages:</strong> None — Questionable body image portrayal, toxic professionalism.</li>
            <li><strong className="font-medium">Products & Purchases:</strong> A lot — Designer names, Starbucks, luxury brands mentioned frequently.</li>
            <li><strong className="font-medium">Drinking, Drugs & Smoking:</strong> A lot — Party culture, drunk driving, crack smoking reference.</li>
            <li><strong className="font-medium">Language:</strong> Some — "F--k", "S--t", "Bitch", "Goddamn", etc.</li>
            <li><strong className="font-medium">Sex, Romance & Nudity:</strong> Some — Casual sex, sexual innuendo, descriptions of bodies.</li>
            <li><strong className="font-medium">Violence & Scariness:</strong> Some — Drunk driving accident leading to coma.</li>
          </ul>
          <p className="text-gray-500 text-sm mt-4">
            Did you know you can flag or adjust limits for content in kid’s entertainment guides?
          </p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg shadow-inner mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            💬 Chatbot Prompts About This Book
          </h4>
          <ul className="list-decimal list-inside text-gray-700 space-y-2">
            <li><strong className="font-medium">1. What should a parent know about this book?</strong></li>
            <li><strong className="font-medium">2. What are the events (good or bad) in this book?</strong></li>
            <li><strong className="font-medium">3. How does the storyline affect the emotions of kids?</strong></li>
          </ul>
        </div>

        <p className="text-gray-500 text-sm text-center mt-6">
          Note: This content is adapted for guidance purposes based on reviews and official sources.
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
