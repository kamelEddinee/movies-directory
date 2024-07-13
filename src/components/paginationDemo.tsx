import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
export function PaginationDemo({
  totalPages,
  setSelectedPage,
  selectedPage,
  paginationNumber = 3,
}: {
  totalPages: number;
  setSelectedPage: (selectedPage: number) => void;
  selectedPage: number;
  paginationNumber?: number;
}) {
  const [total, setTotal] = useState(totalPages ?? 0);
  const selectedPageSegment = Math.ceil(selectedPage / paginationNumber); //2
  const maxPositionSelectedSegment = selectedPageSegment * paginationNumber; //3
  const array = Array.from(Array(paginationNumber))
    .map((item, index) => {
      const max = maxPositionSelectedSegment - index;
      return max > total ? false : max;
    })
    .filter((item) => Boolean(item))
    .reverse();
  useEffect(() => {
    if (totalPages !== undefined) setTotal(totalPages);
  }, [totalPages]);
  const isLastPage = selectedPage === total || total === 0;
  const isFistPage = selectedPage === 1;
  const pageNumiration = selectedPage - 1;
  console.log(array);
  return (
    <Pagination>
      <PaginationContent>
        {!isFistPage && (
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault();
                setSelectedPage(selectedPage - 1);
              }}
            />
          </PaginationItem>
        )}
        {array.map((value) => (
          <PaginationItem key={value}>
            <PaginationLink
              onClick={(e) => {
                e.preventDefault();
                setSelectedPage(value);
              }}
              isActive={selectedPage === value}
            >
              {value}
            </PaginationLink>
          </PaginationItem>
        ))}
        {!isLastPage && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPage(selectedPage + 1);
                }}
              />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
      <div className=" flex font-bold gap-4">
        <div> Total Pages {total}</div>
        <div> Total search results {total * 25} </div>
      </div>
    </Pagination>
  );
}
