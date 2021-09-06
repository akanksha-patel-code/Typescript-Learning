type ID = string;
type PopularTag = string;

interface UserInterface {
    id: ID,
    name: string
}

const popularTags: PopularTag[] = ["dragon", "coffee"];
// PopularTag is entity inside our application and this is an array of this entity
