import React, { ComponentType, ReactElement } from 'react';
import * as LucideIcons from 'lucide-react';
import { AlertTriangle } from 'lucide-react';

const DefaultIcon = AlertTriangle;

const customIcons: Record<string, ComponentType<any>> = {
  // 'customUpload': MyCustomIcon,
};

function isJSXComponent(component: unknown): component is ComponentType<any> {
  return typeof component === 'function' || (typeof component === 'object' && component !== null);
}

export function getIconByName(iconName: string, props?: React.SVGProps<SVGSVGElement>): ReactElement {
  const IconCandidate = customIcons[iconName] || (LucideIcons as Record<string, unknown>)[iconName];
  if (isJSXComponent(IconCandidate)) {
    return <IconCandidate {...props} />;
  }
  console.warn(`⚠️ Invalid or missing icon "${iconName}". Falling back to default.`);
  return <DefaultIcon {...props} />;
}

type IconButtonProps = {
  iconName: string;
  label: string;
};

export const IconButton: React.FC<IconButtonProps> = ({ iconName, label }) => {
  const Icon = getIconByName(iconName, { className: 'w-5 h-5' });
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      {Icon}
      <span>{label}</span>
    </button>
  );
};