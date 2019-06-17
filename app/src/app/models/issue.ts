export default interface Issue {
    number: number,
    title: string,
    description: string,
    owner: string,
    createdOn?: string,
    priority?: string,
    status?: string
}