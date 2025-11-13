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
<p className='font-bold text-center'>Politics</p>
<img src="src/assets/news.jpeg" alt="Benue commisioner News" className="flex h-50 bg-purple-600 shadow-lg flex-column align-center justify-center h-5  mx-auto bg-gray-50 w-89 rounded-tl-lg
rounded-tr-lg " />
<p className='shadow-lg flex-column align-center justify-center h-110  mx-auto bg-gray-50 rounded-2xl w-89'>
  <p className='font-bold text-center text-lg'>Benue Commisoner News</p>
  Benue Commissioner for Cooperatives and Rural Development, Dr Yanmar Ortese, says the establishment of the Cooperative Development Fund by the Cooperative Financing Agency of Nigeria (CFAN) will provide easy access to scalable and affordable loans, boosting grassroots development.

Ortese stated this on Wednesday in Makurdi during the ninth CFAN summit, themed: “Cooperative Development Fund: A one-stop shop for cooperative financing in Nigeria.”

Represented by the Ministry’s Permanent Secretary, Mr Jonathan Asen, the commissioner said cooperatives have long been the unsung heroes of grassroots development.

<div className="flex align-center justify-center p-2 bg-purple-600 w-20 mx-auto rounded-2xl mt-6">Next..</div>
</p>

    </div>
  )
}

export default NewsCard