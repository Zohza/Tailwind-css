import React from 'react'


const NewsCard = () => {
  return (
    <div>
{/*         
Create a news article card with:
- Category badge (Politics, Sports, Entertainment)
- Featured image
- Headline
- Excerpt (2-3 lines)
- Author name and date
- Read time indicator
- Read more link */}
<nav className="flex h-20 bg-purple-600 w-600">
<ul className='flex gap-15 '>
    <li>Politics</li>
    <li>Sports</li>
    <li>Entertainment</li>
</ul>
</nav>
    </div>
  )
}

export default NewsCard