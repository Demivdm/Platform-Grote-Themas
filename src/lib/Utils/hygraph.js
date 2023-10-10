import { HYGRAPH_URL, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private'
import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(HYGRAPH_URL)
export const hygraphHP = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE)