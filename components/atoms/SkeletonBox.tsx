import { cn } from '@sglara/cn';
import React from 'react';

interface SkeletonBoxProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    className?: string;
}

const SkeletonBox: React.FC<SkeletonBoxProps> = ({
    className = '',
}) => {
    return (
        <span
            className={cn('animate-pulse block bg-gray-500 w-full h-20 rounded', className)}

        ></span>
    );
};

export default SkeletonBox;
