# Movies App

A movie directory application featuring search by movie title and genre, with custom-built pagination.
## Link 
https://main--movies-directory100.netlify.app/

## Tech Stack

- Next.js
- Shadcn components
- React Query for data fetching and caching

## Features

- Search by movie title
- Search by genre
- Custom-built pagination
- Caching optimization for improved performance when navigating between pages or repeating searches

## Known Issues and Future Improvements

1. **Total Search Items Edge Case**: The total number of search results depends on the number of items on the last page. Ideally, this should be fetched directly from the API.

2. **Genre Selection**: A genre selection box is included for users to search by genre list. However, the API doesn't return the movie genre names. To address this, i have to fetch and parse the genres incrementally after the first render due to the potential cost of returning all movies grouped by genre from the API.

3. **Shadcn Combobox Bug**: An interesting anecdote - I discovered a bug in the Shadcn Combobox component while working on this project. The bug is documented but not yet fixed. You can find more details here:
   - Combobox documentation: https://ui.shadcn.com/docs/components/combobox  this component don't work correctly,unless modified 
   - GitHub issue: https://github.com/shadcn-ui/ui/issues/2980

4. **Movie Details Modal**: A modal to display full details for each movie .

5. **Token Management**:The API token is currently stored as an environment variable for simplicity

6. **Pagination Edge Cases**: While many edge cases have been handled, there are still some that need to be addressed.

7. **Additional Features**:
   - Direct page navigation
   - Adjustable number of items per page
   - Code refactoring (e.g., isolating filters and movie grid into separate components)

## Project Structure

- `ui/`: Contains Shadcn components
- `components/`: Includes a ChatGPT-generated card component to quickly create a working prototype.

## Notes

- The pagination component was particularly enjoyable to build, despite its complexity.
- The approach taken doesn't take SEO into consideration; it's optimized for a Single Page Application (SPA). For better SEO optimization, using server components would be the best approach.
