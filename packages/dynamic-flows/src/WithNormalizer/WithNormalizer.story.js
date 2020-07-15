import React, { useState } from 'react';
import WithNormalizer from './WithNormalizer';
import { Select, Upload } from '@transferwise/components';
import { action } from '@storybook/addon-actions';

export default {
  component: WithNormalizer,
  title: 'WithNormalizer',
};

export const basic = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <h2>Returned Value:{value}</h2>

      <div className="m-t-3">
        <WithNormalizer>
          <input type="text" className="form-control" onChange={(e) => setValue(e)} />
        </WithNormalizer>
      </div>
      <div className="m-t-3">
        <WithNormalizer>
          <Select
            size="md"
            placeholder="placeholder"
            dropdownRight
            dropdownWidth
            inverse={false}
            block
            onChange={(v) => setValue(v)}
            required
            searchPlaceholder="Search placeholder"
            options={[
              { header: 'Basic' },
              { value: 0, label: 'A thing', note: 'with a note' },
              { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
              { value: 2, label: 'A disabled thing', disabled: true },
              { header: 'Icons' },
              { value: 3, label: 'Profile', icon: 'icon-profile' },
              { value: 4, label: 'Globe', icon: 'icon-globe' },
              { header: 'Currencies' },
              { value: 5, label: 'British pound', currency: 'gbp' },
              { value: 6, label: 'Euro', currency: 'eur' },
              { separator: true },
              { value: 7, label: 'Something else' },
              { header: 'Options with searchable alternatives' },
              {
                value: 8,
                label: 'A thing with searchable alternatives',
                searchStrings: ['abbreviation', 'acronym', 'nickname'],
              },
            ]}
          />
        </WithNormalizer>
      </div>
      <div className="m-t-3">
        <WithNormalizer>
          <Upload
            animationDelay={700}
            csUploadText="Select other file?"
            csFailureText="Upload failed.Please, try again"
            csSuccessText="Upload complete!"
            csTooLargeMessage="Please provide a file smaller than 5MB"
            csWrongTypeMessage="Please provide a supported format"
            maxSize={500000}
            psUploadText="Cancel"
            psFailureText="Upload failed.Please, try again"
            psProcessingText="Uploading..."
            psSuccessText="Upload complete!"
            size="sm"
            usAccept="image/*"
            usUploadText="Or Select File"
            usDisabled={false}
            usDropMessage="Drop file to start upload"
            usLabel=""
            usPlaceholder="Drag and drop file less than 5MB"
            usHelpImage="https://picsum.photos/200/300"
            httpOptions={{
              url: 'https://httpbin.org/post',
              method: 'POST',
            }}
            onStart={(file) => action('onStart', file)}
            onSuccess={(httpResponse) => setValue(httpResponse)}
            onFailure={(httpResponse) => setValue(httpResponse)}
            onCancel={() => action('onCancel')}
          />
        </WithNormalizer>
      </div>
    </>
  );
};
