import React, { JSX } from 'react';
import { useState } from 'react';

import { Transition } from '@headlessui/react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface Props {
  title: string;
  message: string;
  type: NotificationType;
}

export default function Notification({
  title,
  message,
  type = 'success',
}: Props): JSX.Element {
  const [show, setShow] = useState(true);

  const styles = {
    success: {
      icon: CheckCircleIcon,
      iconColor: 'text-green-400',
      ring: 'ring-green-500/30',
      background: 'bg-green-50',
    },
    error: {
      icon: XCircleIcon,
      iconColor: 'text-red-400',
      ring: 'ring-red-500/30',
      background: 'bg-red-50',
    },
    warning: {
      icon: ExclamationTriangleIcon,
      iconColor: 'text-yellow-400',
      ring: 'ring-yellow-500/30',
      background: 'bg-yellow-50',
    },
    info: {
      icon: InformationCircleIcon,
      iconColor: 'text-blue-400',
      ring: 'ring-blue-500/30',
      background: 'bg-blue-50',
    },
  };

  const currentStyle = styles[type];
  const Icon = currentStyle.icon;

  return (
    <>
      <div className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition show={show}>
            <div
              className={`
              pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg
              ${currentStyle.background} ring-1 ${currentStyle.ring}
              transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform 
              data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 
              data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 
              data-[closed]:data-[enter]:sm:translate-y-0`}
            >
              <div className="p-4">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <Icon className={`size-6 ${currentStyle.iconColor}`} />
                  </div>

                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                    <p className="mt-1 text-sm text-gray-500">{message}</p>
                  </div>

                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => setShow(false)}
                      className="
                        inline-flex rounded-md text-gray-400 hover:text-gray-500
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                      "
                    >
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
