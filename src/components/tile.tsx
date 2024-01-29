import { Course, ResultType } from "@/util/types";
import React from "react";

type TileType = {
  data: ResultType;
};
const Tile = ({ data }: TileType) => {
  const reformKeys = (keyItem: string) => {
    const isChar = keyItem.slice(0, 1);
    const newWord = isChar.toUpperCase() + keyItem.slice(1);
    return newWord.split("_").join(" ");
  };

  const getURL = (data: ResultType): string => {
    if ("course_url" in data) return data.course_url;
    else if ("url" in data) return data.url;
    else if ("concept_scheme_uri" in data) return data.concept_scheme_uri;
    else if ("concept_uri" in data) return data.concept_uri;
    else return "";
  };
  return (
    <li className="border border-gray-600 my-2 rounded p-2">
      {Object.entries(data).map((item) => {
        if (
          !(
            item[0].includes("description") ||
            item[0].includes("level_type_and_duration") ||
            item[0].includes("has_top_concept") ||
            item[0].includes("field")
          )
        ) {
          return (
            <p key={item[0]} className=" text-gray-700">
              <strong className=" font-bold text-gray-700 ">
                {reformKeys(item[0])}:
              </strong>{" "}
              {item[1]}{" "}
            </p>
          );
        }
        return <b key={item[0]}></b>;
      })}

      {Object.keys(data).includes("course_url") ||
      Object.keys(data).includes("url") ||
      Object.keys(data).includes("concept_uri") ||
      Object.keys(data).includes("concept_scheme_uri") ? (
        <a
          href={getURL(data)}
          className=" text-blue-500 underline"
          target="_blank"
        >
          {" "}
          Learn more
        </a>
      ) : (
        ""
      )}
    </li>
  );
};

export default Tile;
