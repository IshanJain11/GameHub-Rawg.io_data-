import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <HStack>
          <Skeleton
            boxSize="32px"
            borderRadius={8}
            style={{ marginRight: "1rem", marginBottom: "1rem" }}
          />
          <Skeleton
            width="80px"
            height="16px"
            style={{ marginBottom: "1rem" }}
          />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
