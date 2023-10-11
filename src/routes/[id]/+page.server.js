import { gql } from 'graphql-request'
import { hygraph, hygraphHP } from '$lib/Utils/hygraph'

export async function load({ params }) {
	let query = gql`
		query Werkvormen($id: String!) {
			werkvormen(where: { link: $id }) {
				link
				beschrijving
				korteBeschrijving
				title
				contactpersonen {
					email
				}
				opleiding {
					titel
					faculteit {
						titel
					}
				}
				tags {
					... on Tag {
						titel
						kleur {
							css
						}
					}
				}
				thumbnail {
					url
				}
				video {
					url
					height
					width
					mimeType
				}
			}
		}
	`
	const data = await hygraphHP.request(query, { id: params.id })
	return data
}
