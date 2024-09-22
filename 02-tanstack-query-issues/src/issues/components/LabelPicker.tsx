import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useLabels } from "../hooks";
import { LoadingSpinner } from "../../shared/components";

export const LabelPicker = () => {
  const { labelsQuery } = useLabels();

  if(labelsQuery.isLoading) {
    return (
      <div className="px-2 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-200">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
    {
      labelsQuery.data?.map((label: { id: Key | null | undefined; color: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
        <span
          key={label.id}
          className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold text-slate-200"
          style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
        >
          {label.name}
        </span>
      ))
    }
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>
    </div>
  );
};
