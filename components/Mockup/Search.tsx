import React, { Fragment, useState, useEffect, useCallback } from "react";
//import { SearchIcon } from "@heroicons/react/solid";
import { Combobox, Dialog, Transition } from "@headlessui/react";

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
export default function Search() {
  return (
    <div className="mt-20 mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-sm ring-2 ring-black ring-opacity-5 transition-all">
      <Combobox >
        <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
          <Combobox.Input
            className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
            placeholder="village, district, province"
          />
        </div>

      </Combobox>
    </div>
  );
}

