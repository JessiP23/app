"use client";

import { useMemo } from 'react';
import { Category } from "@prisma/client";
import {
    FcEngineering,
    FcFilmReel,
    FcMultipleDevices,
    FcMusic,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode,
} from 'react-icons/fc';
import { IconType } from "react-icons/lib";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
    items: Category[];
}

export const Categories = ({
    items,
}: CategoriesProps) => {
    const iconMap = useMemo(() => ({
        "Music": FcMusic,
        "Photography": FcOldTimeCamera,
        "Fitness": FcSportsMode,
        "Accounting": FcSalesPerformance,
        "Computer Science": FcMultipleDevices,
        "Filming": FcFilmReel,
        "Engineering": FcEngineering,
    }), []);  

    return(
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CategoryItem
                    key={item.id}
                    label={item.name}
                    icon={iconMap[item.name as keyof typeof iconMap]}
                    value={item.id}
                />
            ))}
        </div>
    )
}
