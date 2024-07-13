"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandList } from "cmdk";

export function ComboboxDemo({
  genres,
  value,
  setValue,
}: {
  genres: string[];
  value: any;
  setValue: any;
}) {
  const [open, setOpen] = React.useState(false);
  //const [value, setValue] = React.useState("");
  console.log("the genre is  " + genres.find((genre) => genre === value));
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? genres.find((genre) => genre === value) : "Select Genre..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {genres.map((genre, index) => {
                console.log("what is this  " + genre);
                return (
                  <CommandItem
                    key={genre}
                    value={genre}
                    onSelect={(currentValue) => {
                      console.log("been selected " + currentValue);
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === genre ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {genre}
                  </CommandItem>
                );
              })}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
