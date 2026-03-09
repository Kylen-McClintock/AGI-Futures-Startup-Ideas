import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://agifutures.co' // Replace with your actual production domain when available.

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
